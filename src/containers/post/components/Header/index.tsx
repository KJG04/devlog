import styled from '@emotion/styled';
import { Badge, Spacer, Text } from '@nextui-org/react';
import moment from 'moment';
import { FC } from 'react';
import { FrontMatter } from 'src/types';
import 'moment/locale/ko';
import { useMemo } from 'react';

interface PropsType {
  frontMatter: FrontMatter;
}

const Header: FC<PropsType> = (props) => {
  const { title, date, tags } = props.frontMatter;
  const dateText = useMemo(() => moment(date).format('LLL'), [date]);

  return (
    <div>
      <Text h1>{title}</Text>
      <InfoContainer>
        <BadgeContainer>
          {tags.map((tag) => (
            <Badge css={{ border: 0 }} variant="flat" key={tag}>
              {tag}
            </Badge>
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
