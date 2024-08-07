'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FC, memo, useMemo } from 'react'
import { MDXComponents } from '#types/mdx'
import {
  Pre,
  Anchor,
  Img,
  Span,
} from '#containers/post/components/MDXComponents'
import { Snippet } from '@nextui-org/snippet'
interface PropsType {
  content: MDXRemoteSerializeResult
}

const Markdown: FC<PropsType> = (props) => {
  const { content } = props
  const components = useMemo<MDXComponents>(
    () => ({
      pre: Pre,
      a: Anchor,
      img: Img,
      span: Span,
      Snippet,
    }),
    [],
  )

  return (
    <>
      <div className="markdown">
        <MDXRemote {...content} components={components} />
      </div>
    </>
  )
}

export default memo(Markdown)
