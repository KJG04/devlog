'use client'

import { NextUIProvider } from '@nextui-org/system'
import { PropsWithChildren } from 'react'

function Providers(props: PropsWithChildren) {
  const { children } = props

  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  )
}

export default Providers
