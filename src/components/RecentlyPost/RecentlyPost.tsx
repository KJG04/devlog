import PostCard from '#components/PostCard/PostCard'
import { Post } from '#types'
import { Spacer } from '@nextui-org/spacer'
import { FC } from 'react'

interface PropsType {
  recentlyPost: Post[]
}

const RecentlyPost: FC<PropsType> = (props) => {
  const { recentlyPost } = props

  return (
    <>
      <h2 className="text-4xl font-semibold">최근 게시물</h2>
      <Spacer y={6} />
      <div className="grid grid-cols-1 gap-[1rem] sm:grid-cols-2">
        {recentlyPost.map((post) => (
          <PostCard
            key={post.frontMatter.date}
            frontMatter={post.frontMatter}
            pathParam={post.pathParam}
          />
        ))}
      </div>
    </>
  )
}

export default RecentlyPost
