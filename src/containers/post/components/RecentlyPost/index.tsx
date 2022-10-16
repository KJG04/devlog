import PostCard from '#components/PostCard';
import { Post } from '#types';
import styled from '@emotion/styled';
import { Spacer, Text } from '@nextui-org/react';
import { FC } from 'react';

interface PropsType {
  allPost: Post[];
}

const RecentlyPost: FC<PropsType> = (props) => {
  const { allPost } = props;

  return (
    <>
      <Text h2>최근 게시물</Text>
      <Spacer y={1} />
      <GridContainer>
        {allPost.map((value) => {
          return (
            <PostCard
              key={value.frontMatter.date}
              frontMatter={value.frontMatter}
              pathParam={value.pathParam}
            />
          );
        })}
      </GridContainer>
    </>
  );
};

export default RecentlyPost;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
