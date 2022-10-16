import { Badge, Card, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FrontMatter } from 'src/types';

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
    <Card isPressable onPress={onPress}>
      {frontMatter.thumbnail && (
        <Card.Body css={{ p: 0, flex: 'none' }}>
          <Card.Image
            src={frontMatter.thumbnail}
            objectFit="cover"
            alt={frontMatter.title}
            css={{
              aspectRatio: '16 / 9',
            }}
          />
        </Card.Body>
      )}
      <Card.Footer
        css={{
          backgroundColor: '$gray100',
          flex: 1,
          alignItems: 'normal',
        }}
      >
        <div>
          <Text h4>{frontMatter.title}</Text>
          <Text css={{ color: '$gray700', lineHeight: '$lg' }}>
            {frontMatter.description}
          </Text>
          <div>
            {frontMatter.tags.map((item) => (
              <Badge variant="flat" css={{ border: 0 }} key={item}>
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;
