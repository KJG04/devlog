import { getAllPosts } from '#utils/post'
import { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseURL = 'https://devlog-kjg04.vercel.app'
  const allPosts = await getAllPosts()

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...allPosts.map(
      ({ pathParam, frontMatter }) =>
        ({
          url: `${baseURL}/post/${pathParam.name}`,
          lastModified: frontMatter.date,
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as const,
    ),
  ]
}

export default sitemap
