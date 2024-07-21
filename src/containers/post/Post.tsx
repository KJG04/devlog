'use client'

import { NextPage } from 'next'
import { StaticPostProps } from '#types/post'

import Thumbnail from '#containers/post/components/Thumbnail'
import Header from '#containers/post/components/Header'
import Markdown from '#containers/post/components/Markdown'
import NextPostCard from '#containers/post/components/NextPostCard'
import RecentlyPost from '#components/RecentlyPost'
import { useMediumZoom } from './hooks'
import { memo, useRef } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Blockquote } from '#containers/post/components/MDXComponents'
import Comment from '#containers/post/components/Comment'
import { Spacer } from '@nextui-org/spacer'
import { motion, useInView } from 'framer-motion'

const components = {
  Blockquote,
}

const Post: NextPage<StaticPostProps> = (props) => {
  const { post, nextPost, recentlyPost, pathName } = props
  const { body, frontMatter } = post
  const ref = useRef<HTMLDivElement>(null)
  const isViewComment = useInView(ref, { once: true })

  useMediumZoom()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
 "@context": "http://schema.org",
 "@type": "WebSite",
 "name": "${post.frontMatter.title} | 김진근의 devlog",
 "url": "https://devlog-kjg04.vercel.app/post/${pathName}",
 "author": {
  "@type": "Person",
  "name": "김진근"
 }
}`,
        }}
      />
      <MDXProvider components={components}>
        <div className="mx-auto w-full max-w-screen-lg px-6">
          <div className="mb-8 md:mb-12" />
          <Thumbnail frontMatter={frontMatter} />
          <div className="mb-8 md:mb-12" />
          <Header frontMatter={frontMatter} />
          <Markdown content={body} />
          <Spacer y={3} ref={ref} />
          <Comment />
          <Spacer y={12} />
          <hr className="border-zinc-600" />
          <Spacer y={12} />
          <RecentlyPost recentlyPost={recentlyPost} />
          <Spacer y={3} />
        </div>
      </MDXProvider>
      {isViewComment && nextPost && frontMatter.series && (
        <motion.div
          className="pointer-events-none fixed bottom-0 right-0 flex w-full flex-row-reverse p-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <NextPostCard post={nextPost} />
        </motion.div>
      )}
    </>
  )
}

export default memo(Post)
