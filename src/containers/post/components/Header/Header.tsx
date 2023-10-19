import { Spacer } from '@nextui-org/react';
import { FC, memo } from 'react';
import { FrontMatter } from 'src/types';
import { useMemo } from 'react';
import Tag from '#components/Tag';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';

interface PropsType {
  frontMatter: FrontMatter;
}

const Header: FC<PropsType> = (props) => {
  const { title, date, tags } = props.frontMatter;
  const dateText = useMemo(
    () => dayjs(date).format('YYYY년 M월 D일 HH:mm:ss'),
    [date],
  );

  const renderedTags = useMemo(
    () => tags.map((tag) => <Tag key={tag}>{tag}</Tag>),
    [tags],
  );

  return (
    <div>
      <h1 className="text-5xl leading-normal font-bold">{title}</h1>
      <Spacer y={4} />
      <div className="flex justify-between flex-wrap gap-y-2">
        <div>
          <div className="flex gap-2 flex-wrap">{renderedTags}</div>
        </div>
        {date && (
          <div className="text-zinc-800 dark:text-zinc-400">{dateText}</div>
        )}
      </div>
      <Spacer y={4} />
      <hr className="border-zinc-600" />
      <Spacer y={4} />
    </div>
  );
};

export default memo(Header);
