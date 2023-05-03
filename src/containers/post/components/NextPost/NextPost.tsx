import { FC, useMemo } from 'react';
import { Card, Image, Spacer, Text } from '@nextui-org/react';
import { memo } from 'react';
import { Post } from '#types';
import styled from '@emotion/styled';
import { useNextPost } from './hooks';
import Tag from '#components/Tag';
import { useCSS } from '#hooks/styles';

interface PropsType {
  post: Post;
}

const NextPost: FC<PropsType> = (props) => {
  const { post } = props;
  const { onPress } = useNextPost(post);

  const cardContainerCSS = useCSS(
    () => ({
      display: 'flex',
      gap: '$1',
      background: post.frontMatter.thumbnail ? 'transparent' : '$accents1',
    }),
    [post.frontMatter.thumbnail]
  );

  const cardImageCSS = useCSS(
    () => ({
      aspectRatio: '16 / 9',
      borderRadius: '$md',
    }),
    []
  );

  const continueCSS = useCSS(() => ({ fontWeight: '$bold' }), []);
  const titleCSS = useCSS(() => ({ fontSize: '$lg', fontWeight: '$bold' }), []);
  const descriptionCSS = useCSS(
    () => ({
      color: '$gray600',
      lineHeight: '$md',
    }),
    []
  );

  const renderedTags = useMemo(
    () => post.frontMatter.tags.map((item) => <Tag key={item}>{item}</Tag>),
    [post.frontMatter.tags]
  );

  return (
    <>
      <Text h3 css={continueCSS}>
        이어서 읽기
      </Text>
      <Spacer y={1} />
      <Card onPress={onPress} isPressable variant="flat" css={cardContainerCSS}>
        {post.frontMatter.thumbnail && (
          <Image
            src={post.frontMatter.thumbnail}
            alt={`${post.frontMatter.title} 썸네일`}
            css={cardImageCSS}
            objectFit="cover"
          />
        )}
        <Card.Body>
          <Text css={titleCSS}>{post.frontMatter.title}</Text>
          <Text css={descriptionCSS}>{post.frontMatter.description}</Text>
          <TagContainer>{renderedTags}</TagContainer>
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
