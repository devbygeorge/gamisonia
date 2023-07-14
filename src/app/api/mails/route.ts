import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New email from gamisonia.com",
      html: ` <p><strong>Full Name:</strong> ${name}</p>
                <p><strong>Email Address:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>`,
    });
    return new Response("Mail Sent", { status: 201 });
  } catch (error) {
    return new Response("Failed to send mail", { status: 500 });
  }
}

const email = process.env.NODEMAILER_LOGIN;
const password = process.env.NODEMAILER_PASSWORD;
const receiverEmail = process.env.NODEMAILER_RECEIVER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

const mailOptions = {
  from: email,
  to: receiverEmail,
};
