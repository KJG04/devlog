'use client'

import { NextUIProvider } from '@nextui-org/system'
import { RecoilRoot } from 'recoil'
import { PropsWithChildren } from 'react'

function Providers(props: PropsWithChildren) {
  const { children } = props

  return (
    <>
      <NextUIProvider>
        <RecoilRoot>{children}</RecoilRoot>
      </NextUIProvider>
    </>
  )
}

export default Providers
