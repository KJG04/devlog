'use client'

import ErrorContainer from '#containers/error'
import { Metadata } from 'next'

const Error = () => {
  return <ErrorContainer />
}

export default Error

export const metadata: Metadata = {
  title: '페이지를 가져오는 도중 오류가 발생했습니다. | 김진근의 Devlog',
}
