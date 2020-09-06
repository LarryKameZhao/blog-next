import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Post } from './entity/Post';
import { User } from './entity/User';
import { Comment } from './entity/Comment';
createConnection()
  .then(async (connection) => {
    const { manager } = connection;
    const u1 = new User();
    u1.username = 'user1';
    u1.passwordDigest = 'xcvxcvxcv';
    await manager.save(u1);
    console.log(u1.id);
    const p1 = new Post();
    p1.title = 'fisrt fost';
    p1.content = 'xcvxvxcvxvxvxvxcvx';
    p1.author = u1;
    await manager.save(p1);
    const c1 = new Comment();
    c1.user = u1;
    c1.post = p1;
    c1.content = 'awasome 1';
    await manager.save(c1);
    connection.close();
  })
  .catch((error) => console.log(error));
