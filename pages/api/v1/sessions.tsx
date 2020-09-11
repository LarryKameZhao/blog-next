import { NextApiHandler } from 'next';
import { getDataBaseConnection } from 'lib/getDatabaseConnection';
import { User } from 'src/entity/User';
import md5 from 'md5';

const Sessions: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  const { username, password } = req.body;
  const connection = await getDataBaseConnection();
  const user = await connection.manager.findOne(User, { where: { username } });
  if (user) {
    const passwordDigest = md5(password);
    if (user.passwordDigest === passwordDigest) {
      res.statusCode = 200;
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 422;
      res.end(JSON.stringify({ password: ['密码不正确'] }));
    }
  } else {
    res.statusCode = 422;
    res.end(JSON.stringify({ errors: { username: ['用户名不存在'] } }));
  }
};
export default Sessions;
