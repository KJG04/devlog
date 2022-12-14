import { FC } from 'react';
import { Card, Image, Spacer, Text } from '@nextui-org/react';
import { memo } from 'react';
import { Post } from '#types';
import styled from '@emotion/styled';
import { useNextPost } from './hooks';
import { Tag } from '#components';

interface PropsType {
  post: Post;
}

const NextPost: FC<PropsType> = (props) => {
  const { post } = props;
  const { onPress } = useNextPost(post);

  return (
    <>
      <Text h3 css={{ fontWeight: '$bold' }}>
        이어서 읽기
      </Text>
      <Spacer y={1} />
      <Card
        onPress={onPress}
        isPressable
        variant="flat"
        css={{
          display: 'flex',
          gap: '$1',
          background: post.frontMatter.thumbnail ? 'transparent' : '$accents1',
        }}
      >
        {post.frontMatter.thumbnail && (
          <Image
            src={post.frontMatter.thumbnail}
            alt={`${post.frontMatter.title} 썸네일`}
            css={{ aspectRatio: '16 / 9', borderRadius: '$md' }}
            objectFit="cover"
          />
        )}
        <Card.Body>
          <Text css={{ fontSize: '$lg', fontWeight: '$bold' }}>
            {post.frontMatter.title}
          </Text>
          <Text css={{ color: '$gray600', lineHeight: '$md' }}>
            {post.frontMatter.description}
          </Text>
          <TagContainer>
            {post.frontMatter.tags.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </TagContainer>
        </Card.Body>
      </Card>
    </>
  );
};

export default memo(NextPost);

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: ${({ theme }) => theme.space[4].value};
`;
