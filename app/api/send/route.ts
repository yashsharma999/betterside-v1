// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    console.log('req', requestBody);
    // const data = await resend.emails.send({
    //   from: 'Yash <onboarding@betterside.fun>',
    //   to:'syash5575@gmail.com',
    //   subject: 'New lead',
    //   react: <div>Test</div
    // });

    return Response.json({ msg: 'test' });
  } catch (error) {
    return Response.json({ error });
  }
}
