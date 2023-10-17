import { Button, Spacer } from '@nextui-org/react';
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

  return (
    <>
      <Head>
        <title>페이지를 찾을 수 없습니다. | 김진근의 Devlog</title>
      </Head>
      <div className="flex-1 flex justify-center items-center flex-col">
        <h1 className="text-9xl m-0">404</h1>
        <div className="text-2xl text-zinc-700">페이지를 찾을 수 없습니다.</div>
        <Spacer y={1} />
        <div className="flex">
          <Button size="sm" onClick={onClickBack}>
            뒤로가기
          </Button>
          <Spacer x={1} />
          <Button color="default" size="sm" onClick={onClickHome}>
            홈으로
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(NotFound);
