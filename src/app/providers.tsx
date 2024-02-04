'use client'

import { NextUIProvider } from '@nextui-org/system'
import { RecoilRoot } from 'recoil'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { PropsWithChildren, Suspense } from 'react'

const progressOptions = { showSpinner: false }

function Providers(props: PropsWithChildren) {
  const { children } = props

  return (
    <>
      <NextUIProvider>
        <RecoilRoot>
          {children}
          <Suspense>
            <ProgressBar
              height="4px"
              color="#006FEE"
              options={progressOptions}
            />
          </Suspense>
        </RecoilRoot>
      </NextUIProvider>
    </>
  )
}

export default Providers
