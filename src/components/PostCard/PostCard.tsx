'use client'

import { FC, memo, useMemo } from 'react'
import { FrontMatter } from '#types/post'
import Tag from '#components/Tag'
import { formatDateByYear } from '#utils/date'
import IMAGE_LIST, { isInImageList } from 'src/constants/imageList'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Spacer } from '@nextui-org/spacer'
import Link from 'next/link'

interface PropsType {
  frontMatter: FrontMatter
  pathParam: {
    name: string
  }
}

const PostCard: FC<PropsType> = (props) => {
  const { frontMatter, pathParam } = props
  const { description, date, tags, title, thumbnail, thumbnailBlurDataURL } =
    frontMatter
  const { name } = pathParam

  const renderedTags = useMemo(
    () => tags.map((item) => <Tag key={item}>{item}</Tag>),
    [tags],
  )

  return (
    <article>
      <Link href={`/post/${name}`}>
        <Card
          isPressable
          className="relative bg-transparent text-left shadow-none transition-shadow"
        >
          {thumbnail && (
            <CardBody className="flex-none p-0">
              <Image
                src={
                  isInImageList(thumbnail) ? IMAGE_LIST[thumbnail] : thumbnail
                }
                alt={title}
                className="aspect-video select-none rounded-lg object-cover"
                width={591}
                height={296}
                placeholder={
                  isInImageList(thumbnail) || !!thumbnailBlurDataURL
                    ? 'blur'
                    : 'empty'
                }
                blurDataURL={thumbnailBlurDataURL}
              />
            </CardBody>
          )}
          <CardFooter
            className={twMerge(
              thumbnail ? 'bg-transparent pl-0 pr-0' : '',
              'flex-1 items-start',
            )}
          >
            <div className="max-w-full">
              <div className="mt-unit-xs mb-1 text-sm text-zinc-400">
                {formatDateByYear(date)}
              </div>
              <h4 className="break-all text-large font-semibold text-zinc-100">
                {title}
              </h4>
              <Spacer y={1} />
              <div className="lead text-zinc-400">{description}</div>
              <Spacer y={2} />
              <div className="flex flex-wrap gap-[0.5rem]">{renderedTags}</div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </article>
  )
}

export default memo(PostCard)
