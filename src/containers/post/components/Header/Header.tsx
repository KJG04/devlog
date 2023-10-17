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
      <h1>{title}</h1>
      <div className="flex justify-between flex-wrap gap-y-2">
        <div>
          <div className="flex gap-2 flex-wrap">{renderedTags}</div>
        </div>
        {date && <div className="text-zinc-800">{dateText}</div>}
      </div>
      <Spacer y={1} />
      <hr className="border-zinc-600" />
      <Spacer y={1} />
    </div>
  );
};

export default memo(Header);
