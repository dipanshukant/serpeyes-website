import type { APIRoute } from 'astro';

export const prerender = false;

// Server-side price source of truth — never trust a price from the client.
// Keep these in sync with PRICING_RETAINERS in src/content/config.js.
const PLANS: Record<string, { name: string; priceMonthly: number }> = {
  'seo-aeo': { name: 'SEO + AEO Retainer', priceMonthly: 599 },
  'seo-aeo-marketing': { name: 'SEO + AEO + Digital Marketing Retainer', priceMonthly: 799 },
};

function getEnv(locals: App.Locals, key: string): string | undefined {
  const runtimeEnv = ((locals as { runtime?: { env?: Record<string, string> } })?.runtime?.env) || {};
  const metaEnv = ((import.meta as unknown as { env?: Record<string, string> }).env) || {};
  const processEnv = (globalThis as { process?: { env?: Record<string, string> } }).process?.env || {};
  return runtimeEnv[key] || metaEnv[key] || processEnv[key];
}

export const POST: APIRoute = async ({ request, locals }) => {
  const stripeSecret = getEnv(locals, 'STRIPE_SECRET_KEY');

  if (!stripeSecret) {
    return new Response(JSON.stringify({ error: 'Stripe is not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { planId, successUrl, cancelUrl } = await request.json();
    const plan = PLANS[planId];

    if (!plan) {
      return new Response(JSON.stringify({ error: 'Unknown plan' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const params = new URLSearchParams();
    params.set('mode', 'subscription');
    params.set('success_url', successUrl);
    params.set('cancel_url', cancelUrl);
    params.set('payment_method_types[0]', 'card');
    params.set('phone_number_collection[enabled]', 'true');
    params.set('billing_address_collection', 'required');

    params.set('line_items[0][quantity]', '1');
    params.set('line_items[0][price_data][currency]', 'sgd');
    params.set('line_items[0][price_data][recurring][interval]', 'month');
    params.set('line_items[0][price_data][unit_amount]', String(Math.round(plan.priceMonthly * 100)));
    params.set('line_items[0][price_data][product_data][name]', plan.name);

    params.set('metadata[planId]', planId);
    params.set('subscription_data[metadata][planId]', planId);
    params.set(
      'subscription_data[description]',
      '3-month minimum commitment, billed monthly. Cancel anytime after the minimum term.'
    );

    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeSecret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = (await res.json()) as any;

    if (!res.ok) {
      return new Response(JSON.stringify({ error: data?.error?.message ?? 'Stripe error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ url: data.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
