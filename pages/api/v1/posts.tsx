import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { getPosts } from 'lib/posts';

const Posts: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const posts = await getPosts();
  console.log(posts);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(posts));
  res.end();
};
export default Posts;
