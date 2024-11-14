import { Resend } from 'resend';
import LeadEmail from '@/emails/lead-email';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { services, message, name } = body;

    const { data, error } = await resend.emails.send({
      from: 'Yash <onboarding@betterside.fun>',
      to: `syash5575@gmail.com`,
      subject: `New Lead`,
      react: LeadEmail({ name, message, services }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
