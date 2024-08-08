'use client'

import { FC, useMemo } from 'react'

import { memo } from 'react'
import { Post } from '#types/post'
import Tag from '#components/Tag'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import IMAGE_LIST, { isInImageList } from 'src/constants/imageList'
import Image from 'next/image'
import Link from 'next/link'

interface PropsType {
  post: Post
}

const NextPostCard: FC<PropsType> = (props) => {
  const { post } = props
  const { tags, thumbnail, thumbnailBlurDataURL, title, description } =
    props.post.frontMatter
  const renderedTags = useMemo(
    () => tags.map((item) => <Tag key={item}>{item}</Tag>),
    [tags],
  )

  return (
    <Link
      href={`/post/${post.pathParam.name}`}
      className="pointer-events-auto flex-1 md:flex-[unset]"
    >
      <Card
        isPressable
        className="flex w-full max-w-[unset] flex-1 gap-1 md:w-[unset] md:max-w-[400px]"
      >
        <CardBody className="p-0">
          <Image
            src={isInImageList(thumbnail) ? IMAGE_LIST[thumbnail] : thumbnail}
            alt={`${title} 썸네일`}
            className="hidden rounded-lg md:block"
            width={400}
            height={200}
            placeholder={
              isInImageList(thumbnail) || !!thumbnailBlurDataURL
                ? 'blur'
                : 'empty'
            }
            blurDataURL={thumbnailBlurDataURL}
          />
        </CardBody>
        <CardFooter className="flex-col items-start text-left">
          <div className="text-lg text-zinc-400">이어서 읽기 </div>
          <div className="text-lg font-bold">{title}</div>
          {description && (
            <div className="text-base text-zinc-400">{description}</div>
          )}
          <div className="mt-4 flex gap-2">{renderedTags}</div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default memo(NextPostCard)
