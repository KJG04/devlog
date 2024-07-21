import Image from 'next/image'
import { FC, memo } from 'react'
import IMAGE_LIST, { isInImageList } from 'src/constants/imageList'
import { FrontMatter } from '#types/post'

interface PropsType {
  frontMatter: FrontMatter
}

const Thumbnail: FC<PropsType> = (props) => {
  const { thumbnail, thumbnailBlurDataURL, title } = props.frontMatter

  if (!thumbnail) {
    return <></>
  }

  return (
    <Image
      data-zoomable
      className="block w-full select-none rounded-xl md:rounded-2xl"
      src={isInImageList(thumbnail) ? IMAGE_LIST[thumbnail] : thumbnail}
      alt={`${title} 썸네일`}
      width={976}
      height={976}
      placeholder={
        isInImageList(thumbnail) || !!thumbnailBlurDataURL ? 'blur' : 'empty'
      }
      blurDataURL={thumbnailBlurDataURL}
      priority
    />
  )
}

export default memo(Thumbnail)
