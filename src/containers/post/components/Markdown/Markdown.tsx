import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FC, memo, useMemo } from 'react';
import { MDXComponents } from 'src/types';
import {
  Pre,
  Anchor,
  Img,
  Span,
} from '#containers/post/components/MDXComponents';

interface PropsType {
  content: MDXRemoteSerializeResult;
}

const Markdown: FC<PropsType> = (props) => {
  const { content } = props;
  const components = useMemo<MDXComponents>(
    () => ({
      pre: Pre,
      a: Anchor,
      img: Img,
      span: Span,
    }),
    [],
  );

  // const containerCSS = useCSS(
  //   () => ({
  //     padding: 0,
  //     ul: {
  //       listStyleType: 'disc',
  //     },
  //     'ul ul': {
  //       listStyleType: 'circle',
  //     },
  //     'ul ul ul': {
  //       listStyleType: 'square',
  //     },
  //     ol: {
  //       listStyleType: 'decimal',
  //     },
  //     'pre code': {
  //       background: 'transparent',
  //     },
  //     'pre code:hover': {
  //       opacity: 1,
  //     },
  //     img: {
  //       borderRadius: '1rem',
  //       margin: '$xl 0',
  //     },
  //     hr: {
  //       margin: '$lg 0',
  //     },
  //     'h1, h2, h3, h4, h5, h6': {
  //       marginTop: '$xl',
  //       marginBottom: '$xs',
  //       fontWeight: '$bold',
  //       position: 'relative',
  //       code: {
  //         fontSize: 'inherit',
  //       },
  //       '&:hover, &:focus': {
  //         a: {
  //           opacity: 1,
  //         },
  //       },
  //       a: {
  //         opacity: 0,
  //         color: '$gray700',
  //         paddingRight: '0.5rem',
  //       },
  //     },
  //     blockquote: {
  //       borderLeft: '5px solid $gray500',
  //       borderRadius: 0,
  //       color: '$gray800',
  //     },
  //   }),
  //   [],
  // );

  return (
    <>
      <div className="w-[768px]">
        <MDXRemote {...content} components={components} />
      </div>
    </>
  );
};

export default memo(Markdown);
