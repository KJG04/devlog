import HomeContainer from '#containers/home'
import { getRecentPosts } from '#utils/post'
import { Metadata } from 'next'
import ProfileImage from 'public/images/profile-image.webp'

const Home = async () => {
  const recentlyPost = (await getRecentPosts()).map((value) => {
    const date = value.frontMatter.date.toString()
    return { ...value, frontMatter: { ...value.frontMatter, date } }
  })

  return <HomeContainer recentlyPost={recentlyPost} />
}

export default Home

export async function generateMetadata(): Promise<Metadata> {
  const title = '김진근의 devlog'
  const description = '개발하며 이것저것을 기록하는 블로그'
  const keywords = [
    '프론트엔드',
    '개발',
    '개발자',
    'frontend',
    'react',
    'reactjs',
    'nextjs',
    'devlog',
    'velog',
    'github',
    '김진근',
    '개발 블로그',
    '블로그',
  ]

  const images = [ProfileImage.src]

  return {
    title,
    description,
    keywords,
    authors: [{ name: '김진근', url: 'https://github.com/KJG04' }],
    openGraph: {
      siteName: '김진근의 Devlog',
      title,
      description,
      type: 'article',
      url: 'https://devlog-kjg04.vercel.app/',
      authors: ['김진근'],
      tags: keywords,
      locale: 'ko',
      images,
    },
    twitter: {
      description,
      title,
      card: 'summary',
      creator: '김진근',
      images,
    },
    publisher: '김진근',
    robots: { follow: true, index: true },
  }
}
