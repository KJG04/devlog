import Image from 'next/image'
import { FC, memo } from 'react'
import IMAGE_LIST from 'src/constants/imageList'
import { FrontMatter } from 'src/types'

interface PropsType {
  frontMatter: FrontMatter
}

const Thumbnail: FC<PropsType> = (props) => {
  const { frontMatter } = props

  if (!frontMatter.thumbnail) {
    return <></>
  }

  return (
    <Image
      data-zoomable
      className="block w-full rounded-xl md:rounded-2xl"
      src={IMAGE_LIST[frontMatter.thumbnail]}
      alt="blog-thumbnail"
      width={976}
      placeholder="blur"
      priority
    />
  )
}

export default memo(Thumbnail)
