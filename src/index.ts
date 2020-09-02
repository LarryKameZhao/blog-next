import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Post } from './entity/Post';

createConnection()
  .then(async (connection) => {
    const p = new Post();
    p.title = 'first post';
    p.content = '第一篇文章';
    await connection.manager.save(p);
    const posts = await connection.manager.find(Post);
    console.log(posts);
    connection.close();
  })
  .catch((error) => console.log(error));
