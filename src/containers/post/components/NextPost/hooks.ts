import { Post } from '#types';
import { useRouter } from 'next/router';

export const useNextPost = (post: Post) => {
  const router = useRouter();

  const onPress = () => {
    router.push(`/post/${post.pathParam.date}/${post.pathParam.name}`);
  };

  return { onPress };
};
