import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { senderName, senderEmail, message } = body;

    if (!senderName || !senderEmail || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${senderName}" <${senderEmail}>`,
      to: 'debonir001@gmail.com', 
      subject: 'Happy Birthday!',
      text: message,
      html: `<p><strong>${senderName}</strong> (<a href="mailto:${senderEmail}">${senderEmail}</a>) sends a birthday wish:</p>
             <p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
