import { FC, memo } from 'react'
import { FrontMatter } from 'src/types'
import { useMemo } from 'react'
import Tag from '#components/Tag'
import 'dayjs/locale/ko'
import dayjs from 'dayjs'
import { Spacer } from '@nextui-org/spacer'

interface PropsType {
  frontMatter: FrontMatter
}

const Header: FC<PropsType> = (props) => {
  const { title, date, tags } = props.frontMatter
  const dateText = useMemo(() => dayjs(date).format('YYYY년 M월 D일'), [date])

  const renderedTags = useMemo(
    () => tags.map((tag) => <Tag key={tag}>{tag}</Tag>),
    [tags],
  )

  return (
    <div>
      <h1 className="text-4xl font-bold md:text-5xl md:leading-normal">
        {title}
      </h1>
      <Spacer y={4} />
      <div className="flex flex-wrap justify-between gap-y-2">
        <div>
          <div className="flex flex-wrap gap-2">{renderedTags}</div>
        </div>
        {date && <div className="text-zinc-400">{dateText}</div>}
      </div>
      <Spacer y={4} />
      <hr className="border-zinc-600" />
      <Spacer y={4} />
    </div>
  )
}

export default memo(Header)
