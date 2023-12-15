import { Card, CardBody, CardFooter, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC, memo, useCallback, useMemo } from 'react';
import { FrontMatter } from 'src/types';
import Tag from '#components/Tag';
import { formatDateByYear } from '#utils/date';
import IMAGE_LIST from 'src/constants/imageList';
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
    <Card
      isPressable
      onPress={onPress}
      className="bg-transparent text-left shadow-none"
    >
      {thumbnail && (
        <CardBody className="flex-none p-0">
          <Image
            src={IMAGE_LIST[thumbnail]}
            alt={title}
            className="aspect-video rounded-lg object-cover"
            width={591}
            placeholder="blur"
          />
        </CardBody>
      )}
      <CardFooter
        className={`${
          thumbnail ? 'bg-transparent pl-0 pr-0' : 'bg-zinc-800'
        } flex-1 items-start`}
      >
        <div className="max-w-[100%]">
          <div className="mt-unit-xs text-sm text-zinc-600">
            {formatDateByYear(date)}
          </div>
          <h4 className="break-all text-large font-semibold">{title}</h4>
          <Spacer y={1} />
          <div className="lead text-zinc-500">{description}</div>
          <Spacer y={2} />
          <div className="flex flex-wrap gap-[0.5rem]">{renderedTags}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default memo(PostCard);
