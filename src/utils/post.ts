import fs from 'fs';
import frontMatter from 'front-matter';
import { glob } from 'glob';
import { FrontMatter, Path, Post } from '../types';
import moment from 'moment';
import remarkMath from 'remark-math';
import toc from 'remark-toc';
import slug from 'remark-slug';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import prism from 'rehype-prism-plus';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeKatex from 'rehype-katex';

const DIR_REPLACE_STRING = '/src/posts';
const POST_PATH = `${process.cwd()}${DIR_REPLACE_STRING}`;

export const getAllPaths = async (): Promise<Path[]> => {
  const paths = glob.sync(`${POST_PATH}/**/*.md*`);

  return paths.map((path) => {
    const regex = new RegExp(`${POST_PATH}|.mdx`, 'g');
    const slug = path
      .replaceAll(regex, '')
      .split('/')
      .filter((item) => item.length > 0);
    const params = { date: `${slug[0]}-${slug[1]}`, name: slug[2] };

    return { params };
  });
};

export const getPostWithPath = async (path: string): Promise<Post> => {
  const fullPath = `${POST_PATH}/${path}.mdx`;
  const file = fs.readFileSync(fullPath, { encoding: 'utf8' });

  const { attributes, body } = frontMatter<FrontMatter>(file);
  attributes.date = moment(attributes.date)
    .add(-9, 'hours')
    .format('YYYY-MM-DD HH:mm:ss');

  return {
    frontMatter: attributes,
    body: await serialize(body, {
      mdxOptions: {
        remarkPlugins: [remarkMath, toc, slug, remarkGfm],
        rehypePlugins: [rehypeKatex, prism, rehypeAutolinkHeadings],
      },
    }),
  };
};
