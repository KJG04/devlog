'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FC, memo, useMemo } from 'react'
import { MDXComponents } from 'src/types'
import {
  Pre,
  Anchor,
  Img,
  Span,
} from '#containers/post/components/MDXComponents'

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
