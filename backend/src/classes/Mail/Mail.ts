import nodemailer, { Transporter } from 'nodemailer';

import { DEFAULT_EMAIL, DEFAULT_TXT } from 'config/constants';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface IMsgData {
  to: string;
  subject: string;
  text: string;
}

interface IMailSender {
  sendMail: (message: IMsgData) => Promise<void>;
}

class Mail implements IMailSender {
  private readonly transporter: Transporter<SMTPTransport.SentMessageInfo>;

  constructor() {
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
  }

  async sendMail(message: IMsgData): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to: message.to || DEFAULT_EMAIL,
      subject: message.subject || DEFAULT_TXT,
      text: message.text || DEFAULT_TXT,
    });
  }
}

export default Mail;
