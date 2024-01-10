import NextHead from 'next/head'
import { FC, memo } from 'react'
import IMAGE_LIST from 'src/constants/imageList'
import { FrontMatter } from 'src/types'

interface PropsType {
  frontMatter: FrontMatter
}

const Head: FC<PropsType> = (props) => {
  const { frontMatter } = props
  const title = `${frontMatter.title} | 김진근의 devlog`

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={frontMatter.description} />
      <meta name="keywords" content={frontMatter.keyword} />
      <meta name="author" content="김진근" />
      <meta name="og:site_name" content="김진근의 Devlog" />
      <meta
        name="og:title"
        content={`${frontMatter.title} - 김진근의 devlog`}
      />
      <meta name="og:description" content={frontMatter.description} />
      <meta name="og:type" content="blog" />
      <meta property="og:url" content="https://devlog-kjg04.vercel.app/" />
      <meta name="twitter:title" content={frontMatter.title} />
      <meta name="twitter:description" content={frontMatter.description} />
      {frontMatter.thumbnail && (
        <>
          <meta
            name="twitter:url"
            content={IMAGE_LIST[frontMatter.thumbnail].src}
          />
          <meta
            property="og:image"
            content={IMAGE_LIST[frontMatter.thumbnail].src}
          />
        </>
      )}
      <meta name="twitter:card" content="blog" />
    </NextHead>
  )
}

export default memo(Head)
