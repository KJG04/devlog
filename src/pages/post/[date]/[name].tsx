import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPaths, getPostWithPath } from '@utils';
import { Post as PostType } from 'types';
import { NextPage } from 'next';
import Head from '@containers/post/components/Head';
import Content from '@containers/post/components/Content';
import { NavigationBar } from '@components';

interface PropsType {
  post: PostType;
}

const Post: NextPage<PropsType> = (props) => {
  const { body, frontMatter } = props.post;
  return (
    <>
      <Head frontMatter={frontMatter} />
      <NavigationBar />
      <Content body={body} frontMatter={frontMatter} />
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  if (!params) {
    return { notFound: true };
  }

  const { date, name } = params;
  if (!date || !name || typeof date !== 'string' || typeof name !== 'string') {
    return { notFound: true };
  }

  const [year, month, ...rest] = date.split('-');
  if (rest.length) {
    return { notFound: true };
  }

  const path = `${year}/${month}/${name}`;

  try {
    const post = await getPostWithPath(path);
    return { notFound: false, props: { post } };
  } catch (error) {
    return { notFound: true };
  }
};
