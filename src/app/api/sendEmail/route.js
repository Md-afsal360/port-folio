import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can also use a custom SMTP server
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password (not your real password)
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'afsal1103@gmail.com', // Your receiving email
      subject: `New Message from ${name}`,
      text: `From: ${name} \nEmail: ${email} \n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json({ message: 'Email sending failed.', error }, { status: 500 });
  }
}
