import { NextPage } from 'next';
import { StaticPostProps } from 'src/types';
import { Container, Spacer } from '@nextui-org/react';
import NavigationBar from '#components/NavigationBar';
import Head from '#containers/post/components/Head';
import Utterances from '#containers/post/components/Utterances';
import Thumbnail from '#containers/post/components/Thumbnail';
import Header from '#containers/post/components/Header';
import Markdown from '#containers/post/components/Markdown';
import NextPost from '#containers/post/components/NextPost';

const Post: NextPage<StaticPostProps> = (props) => {
  const { post, nextPost } = props;
  const { body, frontMatter } = post;

  return (
    <>
      <Head frontMatter={frontMatter} />
      <NavigationBar />
      <Container sm>
        <Spacer y={3} />
        <Thumbnail frontMatter={frontMatter} />
        <Spacer y={3} />
        <Header frontMatter={frontMatter} />
        <Markdown content={body} />
        {nextPost && frontMatter.series && (
          <>
            <Spacer y={3} />
            <NextPost post={nextPost} />
          </>
        )}
        <Spacer y={3} />
        <Utterances />
      </Container>
    </>
  );
};

export default Post;
