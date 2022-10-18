import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';

export interface FrontMatter {
  title: string;
  tags: string[];
  published: boolean;
  date: string;
  description: string;
  thumbnail?: string;
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
