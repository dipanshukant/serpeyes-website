import type { APIRoute } from 'astro';

export const prerender = false;

function getEnv(locals: App.Locals, key: string): string | undefined {
  const runtimeEnv = ((locals as { runtime?: { env?: Record<string, string> } })?.runtime?.env) || {};
  const metaEnv = ((import.meta as unknown as { env?: Record<string, string> }).env) || {};
  const processEnv = (globalThis as { process?: { env?: Record<string, string> } }).process?.env || {};
  return runtimeEnv[key] || metaEnv[key] || processEnv[key];
}

async function verifyStripeSignature(payload: string, sigHeader: string, secret: string): Promise<boolean> {
  const parts = sigHeader.split(',');
  const timestamp = parts.find((p) => p.startsWith('t='))?.split('=')[1];
  const signature = parts.find((p) => p.startsWith('v1='))?.split('=')[1];
  if (!timestamp || !signature) return false;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(`${timestamp}.${payload}`));
  const expected = Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('');
  return expected === signature;
}

async function sendEmail(resendKey: string, from: string, to: string, subject: string, html: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', err);
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  const stripeSecret = getEnv(locals, 'STRIPE_SECRET_KEY');
  const webhookSecret = getEnv(locals, 'STRIPE_WEBHOOK_SECRET');
  const resendKey = getEnv(locals, 'RESEND_API_KEY');
  const fromEmail = getEnv(locals, 'CONTACT_FROM_EMAIL') || 'SerpEyes <onboarding@resend.dev>';
  const founderEmail = 'Dipanshu Kant <dipanshu@serpeyes.com>';

  if (!stripeSecret || !webhookSecret || !resendKey) {
    return new Response('Missing env vars', { status: 500 });
  }

  const payload = await request.text();
  const sigHeader = request.headers.get('stripe-signature');

  if (!sigHeader) {
    return new Response('No signature', { status: 400 });
  }

  const valid = await verifyStripeSignature(payload, sigHeader, webhookSecret);
  if (!valid) {
    return new Response('Invalid signature', { status: 400 });
  }

  const event = JSON.parse(payload);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      const lineItemsRes = await fetch(
        `https://api.stripe.com/v1/checkout/sessions/${session.id}/line_items`,
        { headers: { Authorization: `Bearer ${stripeSecret}` } }
      );
      const lineItemsData = (await lineItemsRes.json()) as any;
      const lineItems = lineItemsData.data || [];

      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name || 'there';
      const firstName = customerName.trim().split(' ')[0] || 'there';
      const planName = lineItems[0]?.description || 'SerpEyes Retainer';
      const monthlyAmount = ((lineItems[0]?.amount_total || 0) / 100).toFixed(2);

      // Personal note from the founder, not a boxed invoice/confirmation template.
      const customerHtml = `
        <div style="font-family:Georgia,'Times New Roman',serif;max-width:560px;margin:0 auto;padding:8px;color:#1a1a1a;font-size:15.5px;line-height:1.7;">
          <p>Hi ${firstName},</p>
          <p>Thanks for signing up for the <strong>${planName}</strong>. I'm Dipanshu, founder of SerpEyes, and I wanted to personally reach out rather than send an automated confirmation.</p>
          <p>Your subscription is active (SGD ${monthlyAmount}/month, 3-month minimum commitment). I'll be in touch within 1 business day to kick off onboarding and get the right details from you to start.</p>
          <p>If you have any questions before then, just reply to this email, it comes straight to me.</p>
          <p style="margin-top:28px;">Talk soon,<br>Dipanshu Kant<br>Founder &amp; CEO, SerpEyes</p>
        </div>
      `;

      const adminHtml = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0f172a;">New Retainer Signup</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
            <tr><td style="padding:8px;background:#f1f5f9;font-weight:bold;width:140px;">Customer</td><td style="padding:8px;">${customerName}</td></tr>
            <tr><td style="padding:8px;background:#f1f5f9;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${customerEmail}">${customerEmail}</a></td></tr>
            <tr><td style="padding:8px;background:#f1f5f9;font-weight:bold;">Plan</td><td style="padding:8px;">${planName}</td></tr>
            <tr><td style="padding:8px;background:#f1f5f9;font-weight:bold;">Monthly</td><td style="padding:8px;font-weight:bold;">SGD ${monthlyAmount}</td></tr>
          </table>
          <p style="padding:12px;background:#fef3c7;border-radius:6px;font-size:13px;">
            Check the Stripe Dashboard for full subscription and billing details.
          </p>
        </div>
      `;

      if (customerEmail) {
        await sendEmail(resendKey, founderEmail, customerEmail, 'Welcome to SerpEyes', customerHtml);
      }
      const adminSubject = `New Retainer Signup: ${customerName}, ${planName}`;
      await sendEmail(resendKey, fromEmail, 'hello@serpeyes.com', adminSubject, adminHtml);
      await sendEmail(resendKey, fromEmail, 'kantdipanshu97@gmail.com', adminSubject, adminHtml);

      console.log(`Subscription processed: ${session.id}`);
    } catch (err: any) {
      console.error('Webhook processing error:', err);
      return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
};
