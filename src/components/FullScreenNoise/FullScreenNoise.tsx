import { memo, useRef } from 'react'

const FullScreenNoise = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url('/images/noise-light.png')] bg-repeat opacity-30"
    />
  )
}

export default memo(FullScreenNoise)
