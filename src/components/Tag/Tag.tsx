import { Chip } from '@nextui-org/chip'
import { FC, memo, PropsWithChildren } from 'react'

const classNames = {
  content: 'text-zinc-400 text-xs font-semibold p-0',
  base: 'h-auto py-1.5 px-2',
}

const Tag: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Chip
      color="default"
      className="select-none bg-zinc-700 py-1"
      classNames={classNames}
    >
      {children}
    </Chip>
  )
}

export default memo(Tag)
