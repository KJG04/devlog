'use client'

import { memo, useEffect, useRef } from 'react'

const Comment: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const theme = 'dark_dimmed'

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return
    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'
    scriptElem.setAttribute('data-repo', 'KJG04/devlog')
    scriptElem.setAttribute('data-repo-id', 'R_kgDOIBiesw')
    scriptElem.setAttribute('data-category', 'Announcements')
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOIBies84Caoqd')
    scriptElem.setAttribute('data-mapping', 'pathname')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '1')
    scriptElem.setAttribute('data-input-position', 'top')
    scriptElem.setAttribute('data-theme', 'dark')
    scriptElem.setAttribute('data-lang', 'ko')
    ref.current.appendChild(scriptElem)
  }, [])

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    )
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app',
    )
  }, [theme])

  return <section ref={ref} />
}

export default memo(Comment)
