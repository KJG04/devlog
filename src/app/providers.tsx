'use client'

import { NextUIProvider } from '@nextui-org/system'
import { RecoilRoot } from 'recoil'
import NextNProgress from 'nextjs-progressbar'
import { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
  const progressOptions = { showSpinner: false }

  return (
    <NextUIProvider>
      <RecoilRoot>
        <NextNProgress
          color="var(--nextui-colors-primaryLightContrast)"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={progressOptions}
        />
        {children}
      </RecoilRoot>
    </NextUIProvider>
  )
}
