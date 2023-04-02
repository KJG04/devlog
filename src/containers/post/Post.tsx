import { NextPage } from 'next';
import { StaticPostProps } from 'src/types';
import { Container, Spacer } from '@nextui-org/react';
import Head from '#containers/post/components/Head/Head';
import Utterances from '#containers/post/components/Utterances';
import Thumbnail from '#containers/post/components/Thumbnail';
import Header from '#containers/post/components/Header';
import Markdown from '#containers/post/components/Markdown';
import NextPost from '#containers/post/components/NextPost';
import RecentlyPost from '#components/RecentlyPost';
import styled from '@emotion/styled';
import { useMediumZoom } from './hooks';
import { memo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Blockquote } from './components/MDXComponents';

const Post: NextPage<StaticPostProps> = (props) => {
  const { post, nextPost, recentlyPost } = props;
  const { body, frontMatter } = post;
  useMediumZoom();

  return (
    <MDXProvider components={{ Blockquote }}>
      <Head frontMatter={frontMatter} />
      <Container sm>
        {frontMatter.thumbnail && (
          <>
            <Spacer y={3} />
            <Thumbnail frontMatter={frontMatter} />
          </>
        )}
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
        <Spacer y={3} />
        <Divider />
        <Spacer y={3} />
        <RecentlyPost recentlyPost={recentlyPost} />
        <Spacer y={3} />
      </Container>
    </MDXProvider>
  );
};

export default memo(Post);

const Divider = styled.hr`
  background-color: var(--nextui-colors-gray600);
`;
