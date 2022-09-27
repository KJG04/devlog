import { Container, Spacer } from '@nextui-org/react';
import { FC } from 'react';
import { FrontMatter } from 'types';
import Markdown from '@containers/post/components/Markdown';
import Utterances from '@containers/post/components/Utterances';
import Thumbnail from '@containers/post/components/Thumbnail';
import Header from '@containers/post/components/Header';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface PropsType {
  body: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
}

const Content: FC<PropsType> = (props) => {
  const { body, frontMatter } = props;

  return (
      <Container md>
        <Spacer y={3} />
        <Thumbnail frontMatter={frontMatter} />
        <Spacer y={3} />
        <Header frontMatter={frontMatter} />
        <Markdown content={body} />
        <Spacer y={3} />
        <Utterances />
        <Spacer y={3} />
      </Container>
  );
};

export default Content;
