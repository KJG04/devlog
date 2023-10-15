import { Card, CardBody, CardFooter, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC, memo, useCallback, useMemo } from 'react';
import { FrontMatter } from 'src/types';
import Tag from '#components/Tag';
import { formatDateByYear } from '#utils/date';
import Image from 'next/image';

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

  const renderedTags = useMemo(
    () => tags.map((item) => <Tag key={item}>{item}</Tag>),
    [tags],
  );

  return (
    <Card isPressable onPress={onPress}>
      {thumbnail && (
        <CardBody className="p-0 flex-none">
          <Image
            src={thumbnail}
            objectFit="cover"
            alt={title}
            className="aspect-video rounded-lg"
            width={100}
            height={100}
          />
        </CardBody>
      )}
      <CardFooter
        className={`${
          thumbnail ? 'bg-transparent pl-0 pr-0' : 'bg-gray-100'
        } flex-1`}
      >
        <div className="max-w-[100%]">
          <div className="text-gray-700 mt-unit-xs text-sm">
            {formatDateByYear(date)}
          </div>
          <h4 className="break-all">{title}</h4>
          <div className="text-gray-800 lead">{description}</div>
          <Spacer y={0.5} />
          <div className="flex gap-[0.5rem] flex-wrap">{renderedTags}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default memo(PostCard);
