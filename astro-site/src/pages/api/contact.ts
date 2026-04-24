import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

function escape(value: unknown): string {
  return String(value ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!
  ));
}

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const phone = (data.phone || '').trim();
  const service = (data.service || '').trim();
  const format = (data.format || '').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Name, email and message are required.' }),
      { status: 400, headers: { 'content-type': 'application/json' } },
    );
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Contact form is not configured on the server.' }),
      { status: 500, headers: { 'content-type': 'application/json' } },
    );
  }

  const to = import.meta.env.CONTACT_TO || 'alice@authenticcommunicatorglobal.com';
  const from = import.meta.env.CONTACT_FROM || 'Authentic Communicator <contact@authenticcommunicatorglobal.com>';

  const resend = new Resend(apiKey);
  const subjectService = service && !/select/i.test(service) ? ` - ${service}` : '';

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}${subjectService}`,
      html: `
        <h2 style="font-family:Georgia,serif">New enquiry from the website</h2>
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>Email:</strong> ${escape(email)}</p>
        <p><strong>Phone:</strong> ${escape(phone) || '&mdash;'}</p>
        <p><strong>Interested in:</strong> ${escape(service) || '&mdash;'}</p>
        <p><strong>Preferred format:</strong> ${escape(format) || '&mdash;'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${escape(message).replace(/\n/g, '<br>')}</p>
      `,
    });
  } catch (err) {
    console.error('[contact] resend error', err);
    return new Response(
      JSON.stringify({ error: 'Could not send your message. Please try again or email directly.' }),
      { status: 500, headers: { 'content-type': 'application/json' } },
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};
