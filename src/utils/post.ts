import fs from 'fs'
import frontMatter from 'front-matter'
import { FrontMatter, Path, Post, PostWithHTMLBody } from '#types'
import remarkMath from 'remark-math'
import toc from 'remark-toc'
import slug from 'remark-slug'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import prism from 'rehype-prism-plus'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeKatex from 'rehype-katex'
import { h } from 'hastscript'
import { glob } from 'glob'
import dayjs from 'dayjs'
import rehypeMetaAsAttributes from '#utils/rehypeMetaAsAttributes'
import p from 'path'

const DIR_REPLACE_STRING = p.normalize('/src/posts')
const POST_PATH = p.normalize(`${process.cwd()}${DIR_REPLACE_STRING}`)

function getFileNameByPath(path: string) {
  const pathList = path.split(p.sep)
  const fileName = pathList[pathList.length - 1]
  const fileNameWithoutExt = fileName
    .split('.')
    .slice(0, -1)
    .reduce((prev, curr) => prev + curr, '')
  return fileNameWithoutExt
}

export const getAllPaths = async (): Promise<Path[]> => {
  const paths = glob.sync(`${POST_PATH}/**/*.md*`)

  return paths
    .filter(async (path) => {
      const post = await getPostByPath(getFileNameByPath(path))
      return post.frontMatter.published
    })
    .map((path) => {
      const params = { name: getFileNameByPath(path) }
      return { params }
    })
}

export const getPostByPath = async (
  path: string,
): Promise<PostWithHTMLBody> => {
  const fullPath = `${POST_PATH}/${path}.mdx`
  const file = fs.readFileSync(fullPath, { encoding: 'utf8' })

  const { attributes, body } = frontMatter<FrontMatter>(file)
  attributes.date = dayjs(attributes.date).toISOString()

  return {
    frontMatter: attributes,
    body: await serialize(body, {
      mdxOptions: {
        remarkPlugins: [remarkMath, toc, slug, remarkGfm],
        rehypePlugins: [
          rehypeKatex,
          rehypeMetaAsAttributes,
          [prism, { showLineNumbers: true }],
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'append',
              properties: {
                class: 'autolink-header',
                ariaHidden: true,
                tabIndex: -1,
              },
              content: [h('span.visually-hidden', ' #')],
            },
          ],
        ],
      },
    }),
  }
}

export const getAllPosts = async (): Promise<Post[]> => {
  const paths = glob.sync(`${POST_PATH}/**/*.md*`)

  return paths
    .map<Post>((path) => {
      const fullPath = path
      const file = fs.readFileSync(fullPath, { encoding: 'utf8' })
      const { attributes, body } = frontMatter<FrontMatter>(file)
      const pathParam = { name: getFileNameByPath(path) }

      return {
        frontMatter: attributes,
        body,
        pathParam,
      }
    })
    .filter((value) => value.frontMatter.published)
}

export const getSeriesPosts = async (series: string): Promise<Post[]> => {
  const posts = (await getAllPosts()).sort((a, b) => {
    const dateA = dayjs(a.frontMatter.date)
    const dateB = dayjs(b.frontMatter.date)

    return dateA.isBefore(dateB) ? -1 : 1
  })

  return posts
    .filter((post) => post.frontMatter.series === series)
    .map((item) => ({
      ...item,
      frontMatter: {
        ...item.frontMatter,
        date: dayjs(item.frontMatter.date).toISOString(),
      },
    }))
}

export const getNextPost = async (
  currPost: FrontMatter,
): Promise<Post | null> => {
  const currSeries = currPost.series

  if (!currSeries) {
    return null
  }

  const posts = await getSeriesPosts(currSeries)
  const currPostIndex = posts.findIndex(
    (item) => item.frontMatter.date === currPost.date,
  )

  if (currPostIndex >= 0) {
    const nextPostIndex = currPostIndex + 1

    if (nextPostIndex < posts.length) {
      return posts[nextPostIndex]
    }
  }

  return null
}

export const getRecentPosts = async () => {
  return (await getAllPosts()).sort((a, b) => {
    const dateA = dayjs(a.frontMatter.date)
    const dateB = dayjs(b.frontMatter.date)

    return dateA.isBefore(dateB) ? 1 : -1
  })
}
