import { withIronSession } from 'next-iron-session';
import { NextApiHandler } from 'next';

export function withSession(handler: NextApiHandler) {
  return withIronSession(handler, {
    // process.env.SECRET_COOKIE_PASSWORD
    password: 'ffbdf99a-d7c2-4ae4-8a07-a013b2e7b07b',
    cookieName: 'blog',
    cookieOptions: {
      secure: false,
    },
  });
}
