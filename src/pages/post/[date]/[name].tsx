import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getAllPaths,
  getNextPost,
  getPostByPath,
  getRecentPosts,
} from '#utils/post'
import Post from '#containers/post'
import { StaticPostProps } from '#types'

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPaths(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<StaticPostProps> = async (
  context,
) => {
  const { params } = context
  if (!params) {
    return { notFound: true }
  }

  const { date, name } = params
  if (!date || !name || typeof date !== 'string' || typeof name !== 'string') {
    return { notFound: true }
  }

  const [year, month, ...rest] = date.split('-')
  if (rest.length) {
    return { notFound: true }
  }

  const path = `${year}/${month}/${name}`

  try {
    const post = await getPostByPath(path)
    if (!post.frontMatter.published) return { notFound: true }

    const props: StaticPostProps = {
      post,
      nextPost: post.frontMatter.series
        ? await getNextPost(post.frontMatter)
        : null,
      recentlyPost: (await getRecentPosts()).map((value) => {
        const date = value.frontMatter.date.toString()

        return {
          ...value,
          frontMatter: {
            ...value.frontMatter,
            date,
          },
        }
      }),
    }

    return { notFound: false, props }
  } catch (error) {
    return { notFound: true }
  }
}
