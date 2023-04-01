import { Post } from '#types';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useNextPost = (post: Post) => {
  const router = useRouter();

  const onPress = useCallback(() => {
    router.push(`/post/${post.pathParam.date}/${post.pathParam.name}`);
  }, [post.pathParam.date, post.pathParam.name, router]);

  return { onPress };
};
