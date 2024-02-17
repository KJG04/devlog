'use client'

import { PropsWithChildren, useCallback, useEffect, useRef } from 'react'

interface SectionTriggerPropsType {
  offset?: number
  offsetPercent?: number
  onTrigger?: () => void
}

const SectionTrigger = (props: PropsWithChildren<SectionTriggerPropsType>) => {
  const { children, offset = 100, offsetPercent, onTrigger } = props
  const ref = useRef<HTMLDivElement>(null)

  const onScroll = useCallback(() => {
    if (typeof window === 'undefined' || !ref.current) return
    const { y, height } = ref.current.getBoundingClientRect()
    const startY = y
    const endY = y + height
    const ofs = offsetPercent
      ? window.screen.availHeight * offsetPercent
      : offset

    // 상단 기준 offset에 걸쳐있다.
    if (ofs >= startY && ofs <= endY) {
      onTrigger?.()
    }
  }, [offset, offsetPercent, onTrigger])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return <div ref={ref}>{children}</div>
}

export default SectionTrigger
