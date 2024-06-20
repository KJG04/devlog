import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '김진근의 devlog',
    short_name: '김진근의 devlog',
    description: '개발하며 이것저것을 기록하는 블로그',
    start_url: '/',
    display: 'standalone',
    background_color: '#18181B',
    theme_color: '#0070F0',
  }
}
