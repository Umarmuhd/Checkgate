import { API_URL } from '../../config/index';
import axios from 'axios';
import dayjs from 'dayjs';
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, req.body);

      if (response.status === 200) {
        const refreshToken = response.data.refreshToken;

        res.setHeader(
          'Set-Cookie',
          cookie.serialize('__refresh_token', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 10 * 336, //
            sameSite: 'strict',
            path: '/',
            expires: dayjs().add(14, 'days').toDate(),
          })
        );

        const { user, accessToken } = response.data;

        return res.status(200).json({ user, token: accessToken });
      } else {
        res.status(400).json({ data: response.data });
        return;
      }
    } catch (error: any) {
      if (error.errno === -4078) {
        res.status(309).json({ message: 'Network error' });
        return;
      }

      return res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
};
