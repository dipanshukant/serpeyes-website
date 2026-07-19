import type { APIRoute } from 'astro';

export const prerender = false;

const requiredFields = ['name', 'email', 'projectType'] as const;

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
};

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  website?: string;
  budget?: string;
  goal?: string;
  timeline?: string;
  message?: string;
};

const toCleanString = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

const getProjectTypeLabel = (type: string) => {
  if (type === 'website') return 'Website / eCommerce';
  if (type === 'app') return 'Mobile App';
  if (type === 'seo-marketing') return 'SEO, AEO & Marketing';
  if (type === 'not-sure') return 'Not Sure Yet';
  return type;
};

const line = (label: string, value?: string) => {
  const cleaned = toCleanString(value);
  return cleaned ? `${label}: ${cleaned}` : null;
};

export const POST: APIRoute = async ({ request, locals, url }) => {
  try {
    let payload: ContactPayload;
    try {
      const queryPayload = Object.fromEntries(url.searchParams.entries()) as ContactPayload;
      let raw = '';
      try {
        raw = await request.clone().text();
      } catch {
        raw = '';
      }

      if (!raw.trim()) {
        try {
          raw = await request.text();
        } catch {
          raw = '';
        }
      }

      if (!raw.trim()) {
        payload = queryPayload;
      } else {
        payload = JSON.parse(raw) as ContactPayload;
      }
    } catch {
      return new Response(JSON.stringify({ error: 'Request body must be valid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    for (const field of requiredFields) {
      if (!toCleanString(payload[field])) {
        return new Response(JSON.stringify({
          error: `${field} is required`,
          debug: {
            query: Object.fromEntries(url.searchParams.entries()),
          }
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    const email = toCleanString(payload.email);
    if (!/\S+@\S+\.\S+/.test(email)) {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const runtimeEnv = ((locals as { runtime?: { env?: Record<string, string> } })?.runtime?.env) || {};
    const metaEnv = ((import.meta as unknown as { env?: Record<string, string> }).env) || {};
    const processEnv = (globalThis as { process?: { env?: Record<string, string> } }).process?.env || {};

    const resendKey = runtimeEnv.RESEND_API_KEY || metaEnv.RESEND_API_KEY || processEnv.RESEND_API_KEY;
    const toEmail = runtimeEnv.CONTACT_TO_EMAIL || metaEnv.CONTACT_TO_EMAIL || processEnv.CONTACT_TO_EMAIL;
    const fromEmail = runtimeEnv.CONTACT_FROM_EMAIL || metaEnv.CONTACT_FROM_EMAIL || processEnv.CONTACT_FROM_EMAIL || 'Serpeyes Contact <onboarding@resend.dev>';

    if (!resendKey || !toEmail) {
      return new Response(JSON.stringify({ error: 'Server email configuration is missing' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const projectType = getProjectTypeLabel(payload.projectType || '');
    const subject = `New Contact Lead: ${projectType} - ${payload.name}`;

    const details = [
      line('Name', toCleanString(payload.name)),
      line('Email', email),
      line('Project Type', projectType),
      line('Company', toCleanString(payload.company)),
      line('Website', toCleanString(payload.website)),
      line('Budget', toCleanString(payload.budget)),
      line('Goal', toCleanString(payload.goal)),
      line('Timeline', toCleanString(payload.timeline)),
      line('Message', toCleanString(payload.message)),
    ].filter(Boolean) as string[];

    const textBody = [
      'New contact form submission from serpeyes.com',
      '',
      ...details,
    ].join('\n');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text: textBody,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      return new Response(JSON.stringify({ error: 'Email sending failed', details: resendError }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unexpected server error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
