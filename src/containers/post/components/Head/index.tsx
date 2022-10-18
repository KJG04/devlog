import NextHead from 'next/head';
import { FC } from 'react';
import { FrontMatter } from 'src/types';

interface PropsType {
  frontMatter: FrontMatter;
}

const Head: FC<PropsType> = (props) => {
  const { frontMatter } = props;

  return (
    <NextHead>
      <title>{frontMatter.title}</title>
      <meta name="description" content={frontMatter.description} />
      <meta name="keywords" content={frontMatter.tags.join('\n')} />
      <meta name="author" content="김진근" />
      <meta name="og:site_name" content="김진근의 Devlog" />
      <meta name="og:title" content={frontMatter.title} />
      <meta name="og:description" content={frontMatter.description} />
      <meta name="og:type" content="blog" />
    </NextHead>
  );
};

export default Head;
