import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getConnection } from 'typeorm';
import { getDataBaseConnection } from 'lib/getDatabaseConnection';
import { Post } from 'src/entity/Post';
import Link from 'next/link';

type Props = {
  posts: Post[];
};
const index: NextPage<Props> = (props) => {
  const { posts } = props;
  console.log(posts);

  return (
    <div>
      <h1>文章列表</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <a>
            <div>{post.title}</div>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connection = await getDataBaseConnection();
  const posts = await connection.manager.find(Post);
  console.log(posts);
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};
