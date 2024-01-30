import PostContainer from '#containers/post'
import { Path } from '#types'
import {
  getAllPaths,
  getNextPost,
  getPostByPath,
  getRecentPosts,
} from '#utils/post'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import IMAGE_LIST from 'src/constants/imageList'

interface Params {
  name: string
}

const Post = async ({ params }: { params: Params }) => {
  const { name } = params
  const path = name

  const post = await getPostByPath(path)

  if (!post.frontMatter.published) {
    notFound()
  }

  const nextPost = post.frontMatter.series
    ? await getNextPost(post.frontMatter)
    : null

  const recentlyPost = (await getRecentPosts()).map((value) => {
    const date = value.frontMatter.date.toString()

    return {
      ...value,
      frontMatter: {
        ...value.frontMatter,
        date,
      },
    }
  })

  return (
    <PostContainer
      post={post}
      nextPost={nextPost}
      recentlyPost={recentlyPost}
    />
  )
}

export default Post

export const generateStaticParams = async (): Promise<Path[]> => {
  return await getAllPaths()
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { name } = params
  const path = name

  const post = await getPostByPath(path)

  const title = `${post.frontMatter.title} | 김진근의 devlog`
  const description = post.frontMatter.description

  return {
    title,
    description,
    keywords: post.frontMatter.keyword,
    authors: [{ name: '김진근', url: 'https://github.com/KJG04' }],
    openGraph: {
      siteName: '김진근의 Devlog',
      title,
      description,
      type: 'article',
      url: 'https://devlog-kjg04.vercel.app/',
      authors: ['김진근'],
      tags: post.frontMatter.tags,
      publishedTime: post.frontMatter.date,
      locale: 'ko',
      images: [IMAGE_LIST[post.frontMatter.thumbnail].src],
    },
    twitter: {
      description,
      title,
      card: 'summary',
      creator: '김진근',
      images: [IMAGE_LIST[post.frontMatter.thumbnail].src],
    },
    publisher: '김진근',
    robots: { follow: true, index: true },
  }
}
