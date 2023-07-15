import fs from "fs";
import handlebars from "handlebars";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  const emailTemplatePath = path.join(
    process.cwd(),
    "src/views/email.handlebars"
  );

  try {
    let html = await readFile(emailTemplatePath, "utf8");
    let template = handlebars.compile(html);
    let data = {
      name,
      email,
      phone,
      message,
    };
    let htmlToSend = template(data);

    await transporter.sendMail({
      ...mailOptions,
      subject: "New email from gamisonia.com",
      html: htmlToSend,
    });
    return new Response("Mail Sent", { status: 201 });
  } catch (error) {
    console.log(error);
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
