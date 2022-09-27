import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';

export interface FrontMatter {
  title: string;
  category: string;
  tags: string[];
  published: boolean;
  date: string;
  description: string;
  thumbnail?: string;
}

export interface Post {
  frontMatter: FrontMatter;
  body: MDXRemoteSerializeResult;
}

export type Path =
  | string
  | {
      params: ParsedUrlQuery;
      locale?: string | undefined;
    };
