import { useCSS } from '#hooks/styles';
import styled from '@emotion/styled';
import { Button, Spacer, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { memo, useCallback } from 'react';

const Error = () => {
  const router = useRouter();
  const onClickBack = useCallback(() => {
    router.back();
  }, [router]);

  const onClickHome = useCallback(() => {
    router.push('/');
  }, [router]);

  const codeStyle = useCSS(() => ({ fontSize: '$9xl', margin: '$0' }), []);
  const descriptionStyle = useCSS(
    () => ({ fontSize: '$2xl', color: '$gray700' }),
    []
  );

  return (
    <Container>
      <Text h1 css={codeStyle}>
        500
      </Text>
      <Text b css={descriptionStyle}>
        페이지를 가져오는 도중 오류가 발생했습니다.
      </Text>
      <Spacer y={1} />
      <ButtonContainer>
        <Button size="sm" onClick={onClickBack}>
          뒤로가기
        </Button>
        <Spacer x={1} />
        <Button bordered color="default" size="sm" onClick={onClickHome}>
          홈으로
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default memo(Error);

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
`;
