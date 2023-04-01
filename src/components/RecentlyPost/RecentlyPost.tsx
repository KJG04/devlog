import PostCard from '#components/PostCard/PostCard';
import { Post } from '#types';
import styled from '@emotion/styled';
import { Spacer, Text } from '@nextui-org/react';
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
    [recentlyPost]
  );

  return (
    <>
      <Text h2>최근 게시물</Text>
      <Spacer y={1} />
      <GridContainer>{renderedRecentlyPost}</GridContainer>
    </>
  );
};

export default memo(RecentlyPost);

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
