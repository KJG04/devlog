import PostCard from '#components/PostCard/PostCard';
import { Post } from '#types';
import { Spacer } from '@nextui-org/react';
import { FC, memo, useMemo } from 'react';

interface PropsType {
  recentlyPost: Post[];
}

const RecentlyPost: FC<PropsType> = (props) => {
  const { recentlyPost } = props;

  const renderedRecentlyPost = useMemo(
    () =>
      recentlyPost.map((post) => (
        <PostCard
          key={post.frontMatter.date}
          frontMatter={post.frontMatter}
          pathParam={post.pathParam}
        />
      )),
    [recentlyPost],
  );

  return (
    <>
      <h2>최근 게시물</h2>
      <Spacer y={1} />
      <div className="grid grid-cols-2 gap-[1rem] lg:grid-cols-1">
        {renderedRecentlyPost}
      </div>
    </>
  );
};

export default memo(RecentlyPost);
