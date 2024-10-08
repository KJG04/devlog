import fs from 'fs/promises'
import frontMatter from 'front-matter'
import { FrontMatter, Path, Post, PostWithHTMLBody } from '#types/post'
import remarkMath from 'remark-math'
import toc from 'remark-toc'
import slug from 'rehype-slug'
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
import { rehypeImageOptimizer } from '#utils/rehypePlaceholder'
import { getBlurDataURL } from '#utils/image'
import { isInImageList } from '#constants/imageList'
import { unstable_cache as _unstable_cache } from 'next/cache'
import CACHE_KEY from '#constants/cacheKey'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (...args: any[]) => Promise<any>


// 개발 롼경에서는 캐싱 하지 않는다
const devUnstableCache = <T extends Callback>(
  cb: T,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _keyParts?: string[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options?: {
    revalidate?: number | false
    tags?: string[]
  },
) => cb

const unstable_cache =
  process.env.NODE_ENV === 'development' ? devUnstableCache : _unstable_cache

const DIR_REPLACE_STRING = p.normalize('/src/posts')
const POST_PATH = p.normalize(`${process.cwd()}${DIR_REPLACE_STRING}`)

function getFileNameByPath(path: string) {
  const pathList = path.split(p.sep)
  const index = pathList.findIndex((v) => v === 'posts')
  const fileName = pathList.slice(index - pathList.length + 1).join('/')

  const fileNameWithoutExt = fileName
    .split('.')
    .slice(0, -1)
    .reduce((prev, curr) => prev + curr, '')
  return fileNameWithoutExt
}

export const getAllPaths = unstable_cache(async (): Promise<Path[]> => {
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
}, CACHE_KEY.GET_ALL_PATHS)

export const getPostByPath = unstable_cache(
  async (path: string): Promise<PostWithHTMLBody> => {
    const fullPath = `${POST_PATH}/${path}.mdx`
    const file = await fs.readFile(fullPath, { encoding: 'utf8' })

    const { attributes, body } = frontMatter<FrontMatter>(file)
    attributes.date = dayjs(attributes.date).toISOString()
    attributes.thumbnailBlurDataURL = !isInImageList(attributes.thumbnail)
      ? (await getBlurDataURL(attributes.thumbnail))?.base64
      : undefined

    return {
      frontMatter: attributes,
      body: await serialize(body, {
        mdxOptions: {
          remarkPlugins: [remarkMath, toc, remarkGfm],
          rehypePlugins: [
            slug,
            rehypeKatex,
            rehypeMetaAsAttributes,
            rehypeImageOptimizer,
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
  },
  CACHE_KEY.GET_POST_BY_PATH,
)

export const getAllPosts = unstable_cache(async (): Promise<Post[]> => {
  const paths = glob.sync(`${POST_PATH}/**/*.md*`)

  return (
    await Promise.all(
      paths.map<Promise<Post>>(async (path) => {
        const fullPath = path
        const file = await fs.readFile(fullPath, { encoding: 'utf8' })
        const { attributes, body } = frontMatter<FrontMatter>(file)
        const pathParam = { name: getFileNameByPath(path) }
        attributes.date = dayjs(attributes.date).toISOString()
        attributes.thumbnailBlurDataURL = !isInImageList(attributes.thumbnail)
          ? (await getBlurDataURL(attributes.thumbnail))?.base64
          : undefined

        return {
          frontMatter: attributes,
          body,
          pathParam,
        }
      }),
    )
  ).filter((value) => value.frontMatter.published)
}, CACHE_KEY.GET_ALL_POSTS)

export const getSeriesPosts = unstable_cache(
  async (series: string): Promise<Post[]> => {
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
  },
  CACHE_KEY.GET_SERIES_POSTS,
)

export const getNextPost = unstable_cache(
  async (currPost: FrontMatter): Promise<Post | null> => {
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
  },
  CACHE_KEY.GET_NEXT_POST,
)

export const getRecentPosts = unstable_cache(async () => {
  return (await getAllPosts()).sort((a, b) => {
    const dateA = dayjs(a.frontMatter.date)
    const dateB = dayjs(b.frontMatter.date)

    return dateA.isBefore(dateB) ? 1 : -1
  })
}, CACHE_KEY.GET_RECENT_POSTS)
