import styled from '@emotion/styled';
import { Card, Spacer, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC, memo, useCallback, useMemo } from 'react';
import { FrontMatter } from 'src/types';
import { Tag } from '#components';
import { useCSS } from 'src/hooks';
import { formatDateByYear } from '#utils';

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
  const { description, date, tags, title, thumbnail } = frontMatter;
  const { date: pathDate, name } = pathParam;

  const onPress = useCallback(() => {
    router.push(`/post/${pathDate}/${name}`);
  }, [pathDate, name, router]);

  const bodyCSS = useCSS(() => ({ p: 0, flex: 'none' }), []);

  const imgaeCSS = useCSS(
    () => ({
      aspectRatio: '16 / 9',
      borderRadius: '$lg',
    }),
    []
  );

  const footerCSS = useCSS(
    () => ({
      backgroundColor: thumbnail ? 'transparent' : '$gray100',
      flex: 1,
      alignItems: 'normal',
      paddingLeft: thumbnail ? 0 : undefined,
      paddingRight: thumbnail ? 0 : undefined,
    }),
    [thumbnail]
  );

  const descriptionCSS = useCSS(
    () => ({
      color: '$gray800',
      lineHeight: '$lg',
    }),
    []
  );

  const dateCSS = useCSS(
    () => ({
      color: '$gray700',
      marginTop: '$xs',
      fontSize: '$sm',
    }),
    []
  );

  const renderedTags = useMemo(
    () => tags.map((item) => <Tag key={item}>{item}</Tag>),
    [tags]
  );

  return (
    <Card isPressable onPress={onPress} variant="flat">
      {thumbnail && (
        <Card.Body css={bodyCSS}>
          <Card.Image
            src={thumbnail}
            objectFit="cover"
            alt={title}
            css={imgaeCSS}
          />
        </Card.Body>
      )}
      <Card.Footer css={footerCSS}>
        <ContentContainer>
          <Text css={dateCSS}>{formatDateByYear(date)}</Text>
          <Text h4>{title}</Text>
          <Text css={descriptionCSS}>{description}</Text>
          <Spacer y={0.5} />
          <TagContainer>{renderedTags}</TagContainer>
        </ContentContainer>
      </Card.Footer>
    </Card>
  );
};

export default memo(PostCard);

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ContentContainer = styled.div`
  max-width: 100%;
`;
