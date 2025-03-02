import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { from, subject, text } = req.body;
  if (!from || !subject || !text) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // SMTP サーバーの設定 (Gmail を例に)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // 他のプロバイダーの場合は適宜変更
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL, // 環境変数から取得
        pass: process.env.NEXT_PUBLIC_NODE_MAILER_PASSWORD, // 環境変数から取得
      },
    });

    // // メール送信
    await transporter.sendMail({
      from: from,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: subject,
      text: text,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};

export default handler;
