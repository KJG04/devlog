import { Badge, Card, Text } from '@nextui-org/react';
import { FC } from 'react';
import { FrontMatter } from 'src/types';

interface PropsType {
  frontMatter: FrontMatter;
}

const PostCard: FC<PropsType> = (props) => {
  const { frontMatter } = props;

  return (
    <Card isPressable>
      <Card.Body css={{ p: 0 }}>
        {frontMatter.thumbnail && (
          <Card.Image
            src={frontMatter.thumbnail}
            objectFit="cover"
            alt={frontMatter.title}
            css={{
              aspectRatio: '16 / 9',
            }}
          />
        )}
      </Card.Body>
      <Card.Footer css={{ backgroundColor: '$gray100' }}>
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
