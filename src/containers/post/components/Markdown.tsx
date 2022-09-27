import { Container } from '@nextui-org/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FC, memo, useMemo } from 'react';
import { MDXComponents } from 'types';
import { Pre, Anchor, Img } from '@containers/post/components/MDXComponents';

interface PropsType {
  content: MDXRemoteSerializeResult;
}

const Markdown: FC<PropsType> = (props) => {
  const { content } = props;
  const components = useMemo<MDXComponents>(
    () => ({ pre: Pre, a: Anchor, img: Img }),
    []
  );

  return (
    <>
      <Container
        md
        style={{ padding: 0 }}
        css={{
          ul: {
            listStyleType: 'disc',
          },
          'ul ul': {
            listStyleType: 'circle',
          },
          'ul ul ul': {
            listStyleType: 'square',
          },
          ol: {
            listStyleType: 'decimal',
          },
          'pre code': {
            background: 'transparent',
          },
          'pre code:hover': {
            opacity: 1,
          },
          pre: {
            margin: '$lg 0 !important',
          },
          img: {
            borderRadius: '1rem',
            margin: '$xl 0',
          },
          'h1, h2, h3': {
            marginTop: '$lg',
            marginBottom: '$xs',
            fontWeight: '$bold',
          },
          'h1 code, h2 code, h3 code': {
            fontSize: 'inherit',
          },
          blockquote: {
            borderLeft: '10px solid $gray300',
            borderRadius: 0,
          },
        }}
      >
        <MDXRemote {...content} components={components} />
      </Container>
    </>
  );
};

export default memo(Markdown);
