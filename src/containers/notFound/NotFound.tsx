import { useCSS } from '#hooks/styles';
import styled from '@emotion/styled';
import { Button, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo, useCallback } from 'react';

const NotFound = () => {
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
    [],
  );

  return (
    <>
      <Head>
        <title>페이지를 찾을 수 없습니다. | 김진근의 Devlog</title>
      </Head>
      <Container>
        <Text h1 css={codeStyle}>
          404
        </Text>
        <Text b css={descriptionStyle}>
          페이지를 찾을 수 없습니다.
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
    </>
  );
};

export default memo(NotFound);

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
