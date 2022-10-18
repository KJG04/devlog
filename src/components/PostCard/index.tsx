import styled from '@emotion/styled';
import { Card, Spacer, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FrontMatter } from 'src/types';
import { Tag } from '#components';

interface PropsType {
  frontMatter: FrontMatter;
  pathParam: {
    date: string;
    name: string;
  };
}

const PostCard: FC<PropsType> = (props) => {
  const { frontMatter, pathParam } = props;
  const router = useRouter();

  const onPress = () => {
    router.push(`/post/${pathParam.date}/${pathParam.name}`);
  };

  return (
    <Card isPressable onPress={onPress} variant="flat">
      {frontMatter.thumbnail && (
        <Card.Body css={{ p: 0, flex: 'none' }}>
          <Card.Image
            src={frontMatter.thumbnail}
            objectFit="cover"
            alt={frontMatter.title}
            css={{
              aspectRatio: '16 / 9',
              borderRadius: '$lg',
            }}
          />
        </Card.Body>
      )}
      <Card.Footer
        css={{
          backgroundColor: frontMatter.thumbnail ? 'transparent' : '$gray100',
          flex: 1,
          alignItems: 'normal',
          paddingLeft: frontMatter.thumbnail ? 0 : undefined,
          paddingRight: frontMatter.thumbnail ? 0 : undefined,
        }}
      >
        <ContentContainer>
          <Text h4>{frontMatter.title}</Text>
          <Text css={{ color: '$gray700', lineHeight: '$lg' }}>
            {frontMatter.description}
          </Text>
          <Spacer y={0.5} />
          <TagContainer>
            {frontMatter.tags.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </TagContainer>
        </ContentContainer>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ContentContainer = styled.div`
  max-width: 100%;
`;
