import type { APIRoute } from 'astro';

export const prerender = false;

function getEnv(locals: App.Locals, key: string): string | undefined {
  const runtimeEnv = ((locals as { runtime?: { env?: Record<string, string> } })?.runtime?.env) || {};
  const metaEnv = ((import.meta as unknown as { env?: Record<string, string> }).env) || {};
  const processEnv = (globalThis as { process?: { env?: Record<string, string> } }).process?.env || {};
  return runtimeEnv[key] || metaEnv[key] || processEnv[key];
}

// Unlisted diagnostic endpoint, not linked from any page or nav.
// Creates a minimum-amount (SGD 0.50) one-time checkout session using
// whatever STRIPE_SECRET_KEY is currently set, test or live.
export const GET: APIRoute = async ({ locals }) => {
  const stripeSecret = getEnv(locals, 'STRIPE_SECRET_KEY');

  if (!stripeSecret) {
    return new Response(JSON.stringify({ error: 'Stripe is not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const params = new URLSearchParams();
  params.set('mode', 'payment');
  params.set('success_url', 'https://serpeyes.com/thank-you');
  params.set('cancel_url', 'https://serpeyes.com/');
  params.set('payment_method_types[0]', 'card');
  params.set('phone_number_collection[enabled]', 'true');
  params.set('billing_address_collection', 'required');
  params.set('line_items[0][quantity]', '1');
  params.set('line_items[0][price_data][currency]', 'sgd');
  params.set('line_items[0][price_data][unit_amount]', '50');
  params.set('line_items[0][price_data][product_data][name]', 'Webhook Test Order');
  params.set('metadata[site]', 'serpeyes');

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

  return new Response(JSON.stringify({ url: data.url, mode: data.livemode ? 'live' : 'test' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
