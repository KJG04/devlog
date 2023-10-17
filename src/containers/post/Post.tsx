import { NextPage } from 'next';
import { StaticPostProps } from 'src/types';
import { Spacer } from '@nextui-org/react';
import Head from '#containers/post/components/Head/Head';
import Utterances from '#containers/post/components/Utterances';
import Thumbnail from '#containers/post/components/Thumbnail';
import Header from '#containers/post/components/Header';
import Markdown from '#containers/post/components/Markdown';
import NextPost from '#containers/post/components/NextPost';
import RecentlyPost from '#components/RecentlyPost';
import { useMediumZoom } from './hooks';
import { memo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Blockquote } from '#containers/post/components/MDXComponents';

const Post: NextPage<StaticPostProps> = (props) => {
  const { post, nextPost, recentlyPost } = props;
  const { body, frontMatter } = post;
  useMediumZoom();

  return (
    <MDXProvider components={{ Blockquote }}>
      <Head frontMatter={frontMatter} />
      <div>
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
        <hr className="bg-zinc-600" />
        <Spacer y={3} />
        <RecentlyPost recentlyPost={recentlyPost} />
        <Spacer y={3} />
      </div>
    </MDXProvider>
  );
};

export default memo(Post);
