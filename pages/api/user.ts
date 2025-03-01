import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ user: 'Tatsuki' });
  } else if (req.method === 'POST') {
    const { name } = req.body;
    console.log('---------------');
    console.log(name);
    res.status(201).json({ message: `User ${name} created` });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
