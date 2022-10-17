import styled from '@emotion/styled';
import { Spacer, Text } from '@nextui-org/react';
import { FC } from 'react';
import { FrontMatter } from 'src/types';
import { useMemo } from 'react';
import { Tag } from '#components';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';

interface PropsType {
  frontMatter: FrontMatter;
}

const Header: FC<PropsType> = (props) => {
  const { title, date, tags } = props.frontMatter;
  const dateText = useMemo(
    () => dayjs(date).format('YYYY년 M월 D일 HH:mm:ss'),
    [date]
  );

  return (
    <div>
      <Text h1>{title}</Text>
      <InfoContainer>
        <BadgeContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </BadgeContainer>
        {date && <Text css={{ color: '$gray800' }}>{dateText}</Text>}
      </InfoContainer>
      <Spacer y={1} />
      <Divider />
      <Spacer y={1} />
    </div>
  );
};

export default Header;

const BadgeContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  flex-wrap: wrap;
  row-gap: 0.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 0.5rem;
`;

const Divider = styled.hr`
  background-color: var(--nextui-colors-gray600);
`;
