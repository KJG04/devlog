import Image from 'next/image'
import { FC, memo } from 'react'
import IMAGE_LIST, { isInImageList } from 'src/constants/imageList'
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
      className="block w-full select-none rounded-xl md:rounded-2xl"
      src={
        isInImageList(frontMatter.thumbnail)
          ? IMAGE_LIST[frontMatter.thumbnail]
          : frontMatter.thumbnail
      }
      alt="blog-thumbnail"
      width={976}
      height={976}
      placeholder={isInImageList(frontMatter.thumbnail) ? 'blur' : 'empty'}
      priority
    />
  )
}

export default memo(Thumbnail)
