import { useHighlightContext } from '#context/highlight'
import { HTMLProps } from 'react'

interface PropsType {
  line?: string
}

type MergedPropsType = HTMLProps<HTMLSpanElement> & PropsType

const Span = (props: HTMLProps<HTMLSpanElement>) => {
  const { className, ...rest } = props
  const highlight = useHighlightContext()

  return (
    <span
      {...rest}
      className={`${className ?? ''} ${
        highlight.includes(Number((props as MergedPropsType).line))
          ? 'line-highlight'
          : ''
      }`}
    />
  )
}

export default Span
