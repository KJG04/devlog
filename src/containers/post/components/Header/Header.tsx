import styled from '@emotion/styled';
import { Spacer, Text } from '@nextui-org/react';
import { FC, memo } from 'react';
import { FrontMatter } from 'src/types';
import { useMemo } from 'react';
import Tag from '#components/Tag';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import { useCSS } from '#hooks/styles';

interface PropsType {
  frontMatter: FrontMatter;
}

const Header: FC<PropsType> = (props) => {
  const { title, date, tags } = props.frontMatter;
  const dateText = useMemo(
    () => dayjs(date).format('YYYY년 M월 D일 HH:mm:ss'),
    [date]
  );

  const renderedTags = useMemo(
    () => tags.map((tag) => <Tag key={tag}>{tag}</Tag>),
    [tags]
  );

  const dateCSS = useCSS(() => ({ color: '$gray800' }), []);

  return (
    <div>
      <Text h1>{title}</Text>
      <InfoContainer>
        <div>
          <BadgeContainer>{renderedTags}</BadgeContainer>
        </div>
        {date && <Text css={dateCSS}>{dateText}</Text>}
      </InfoContainer>
      <Spacer y={1} />
      <Divider />
      <Spacer y={1} />
    </div>
  );
};

export default memo(Header);

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
