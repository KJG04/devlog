import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import IMAGE_LIST from 'src/constants/imageList';

export interface FrontMatter {
  title: string;
  tags: string[];
  published: boolean;
  date: string;
  description: string;
  keyword: string;
  thumbnail?: keyof typeof IMAGE_LIST;
  darkThumbnail?: string;
  series?: string;
}

export interface PostWithHTMLBody {
  frontMatter: FrontMatter;
  body: MDXRemoteSerializeResult;
}

export type Path =
  | string
  | {
      params: ParsedUrlQuery;
      locale?: string | undefined;
    };

export interface Post {
  frontMatter: FrontMatter;
  body: string;
  pathParam: { date: string; name: string };
}

export interface StaticPostProps {
  post: PostWithHTMLBody;
  nextPost: Post | null;
  recentlyPost: Post[];
}
