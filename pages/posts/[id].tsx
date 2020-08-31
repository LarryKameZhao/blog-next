import React from 'react';
import { getPost } from 'lib/posts';
import { NextPage } from 'next';
import { getPostIds } from '../../lib/posts';
type Props = {
  post: Post;
};
const postsShow: NextPage<Props> = (props) => {
  const { post } = props;
  return (
    <div>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.htmlContent }}></article>
    </div>
  );
};
export default postsShow;
export const getStaticPaths = async () => {
  const idList = await getPostIds();

  return {
    paths: idList.map((id) => ({
      params: { id: id },
    })),
    fallback: false,
  };
};
export const getStaticProps = async (staticContext: any) => {
  const id = staticContext.params.id;
  const post = await getPost(id);
  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
};
