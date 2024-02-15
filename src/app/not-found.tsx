import NotFoundContainer from '#containers/notFound'
import { Metadata } from 'next'

const NotFound = () => {
  return <NotFoundContainer />
}

export default NotFound

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다. | 김진근의 Devlog',
}
