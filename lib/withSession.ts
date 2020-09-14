import { withIronSession } from 'next-iron-session';
import { NextApiHandler, GetServerSideProps } from 'next';
console.log(process.env.SECRET);
export function withSession(handler: NextApiHandler | GetServerSideProps) {
  return withIronSession(handler, {
    // process.env.SECRET_COOKIE_PASSWORD
    password: process.env.SECRET,
    cookieName: 'blog',
    cookieOptions: {
      secure: false,
    },
  });
}
