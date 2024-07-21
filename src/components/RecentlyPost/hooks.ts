import { Post } from '#types/post'

export const usePost = (post: Post[]) => {
  const posts = []

  for (let i = 0; i < post.length; i += 4) {
    const temp = []
    for (let j = 0; j < 2; j++) {
      if (i + j < post.length) {
        const item = post[i + j]
        temp.push(item)
      } else {
        temp.push(null)
      }
    }

    posts.push(temp)
  }

  return posts
}
