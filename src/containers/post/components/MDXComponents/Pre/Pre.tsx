'use client'

import { HTMLProps, memo, useRef } from 'react'
import highlightContext from '#context/highlight'
import { useHighlightValue, usePathValue } from './hooks'
import { useRecoilValue } from 'recoil'
import { navigationBarVisibleAtom } from '#atoms/navigationBarVisible'
import { twMerge } from 'tailwind-merge'
import dynamic from 'next/dynamic'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs'

const CopyButton = dynamic(
  () => import('#containers/post/components/MDXComponents/Pre/CopyButton'),
  { ssr: false },
)

interface PropsType {
  showLineNumbers?: string
  line?: string
  path?: string
}

type MergedPropsType = HTMLProps<HTMLPreElement> & PropsType

const Pre = (props: HTMLProps<HTMLPreElement>) => {
  const {
    children,
    className,
    showLineNumbers: _showLineNumbers,
    line,
    path: _path,
    ...rest
  } = props as MergedPropsType
  const showLineNumbers = _showLineNumbers === 'true'
  const preRef = useRef<HTMLPreElement>(null)
  const highlight = useHighlightValue(line)
  const path = usePathValue(_path)
  const visible = useRecoilValue(navigationBarVisibleAtom)

  return (
    <highlightContext.Provider value={highlight}>
      <div
        className="relative left-0 top-0 mx-0 my-8 w-full rounded-2xl"
        style={{ contain: 'paint' }}
      >
        <div
          className={twMerge(
            visible ? 'top-[64px]' : 'top-0',
            `sticky z-30 flex h-[41px] border-b-[1px] border-[#9ca3af33] bg-zinc-800 px-0 py-0 text-zinc-400 transition-[top] duration-400 before:absolute before:bottom-full before:left-0 before:h-[1000px] before:w-full before:bg-zinc-800 before:content-['']`,
          )}
        >
          <div className="flex flex-1 items-center px-5">
            <Breadcrumbs isDisabled variant="light">
              {path?.map((p) => <BreadcrumbItem key={p}>{p}</BreadcrumbItem>)}
            </Breadcrumbs>
          </div>
          <CopyButton preRef={preRef} />
        </div>
        <pre
          {...rest}
          ref={preRef}
          className={`${className ?? ''} ${
            showLineNumbers ? 'show-line-numbers' : ''
          } m-0`}
        >
          {children}
        </pre>
      </div>
    </highlightContext.Provider>
  )
}

export default memo(Pre) as typeof Pre
