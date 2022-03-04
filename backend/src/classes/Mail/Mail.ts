import nodemailer, { Transporter } from 'nodemailer';

import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface IMsgData {
  to: string;
  subject: string;
  text: string;
}

class Mail {
  private transporter: Transporter<SMTPTransport.SentMessageInfo>;

  private to: string;

  private subject: string;

  private text: string;

  constructor(mailData: IMsgData) {
    this.transporter = nodemailer.createTransport({
      host: String(process.env.SMTP_HOST),
      port: Number(process.env.SMTP_PORT_SSL),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    this.to = mailData.to || 'default@mail.com';
    this.subject = mailData.subject;
    this.text = mailData.text;
  }

  async sendMail(): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to: this.to,
      subject: this.subject,
      text: this.text,
    });
  }
}

export default Mail;
