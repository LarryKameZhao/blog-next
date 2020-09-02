import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Post } from './entity/Post';

createConnection()
  .then(async (connection) => {
    const posts = await connection.manager.find(Post);
    if (posts.length === 0) {
      await connection.manager.save([
        new Post({ title: 'POST1', content: '文章post1' }),
        new Post({ title: 'POST2', content: '文章post2' }),
        new Post({ title: 'POST3', content: '文章post3' }),
        new Post({ title: 'POST4', content: '文章post4' }),
      ]);
      console.log('posts数据填充');
    }
    console.log(posts);
    connection.close();
  })
  .catch((error) => console.log(error));
