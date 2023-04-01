import { GithubLogo, RecentlyPost } from '#components';
import { useCSS } from '#hooks';
import { Post } from '#types';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Container, Grid, Link, Spacer, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { memo } from 'react';

interface PropsType {
  recentlyPost: Post[];
}

const Home: NextPage<PropsType> = (props) => {
  const { recentlyPost } = props;
  const theme = useTheme();
  const gridCSS = useCSS(
    () => ({ width: '100%', justifyContent: 'center' }),
    []
  );
  const descritpionCSS = useCSS(() => ({ flexDirection: 'column' }), []);

  return (
    <>
      <Head>
        <title>김진근의 devlog</title>
        <meta
          name="description"
          content="개발하며 이것저것을 기록하는 블로그"
        />
        <meta
          name="keywords"
          content="프론트엔드, 개발, 개발자, frontend, react, reactjs, nextjs, devlog, velog, github, 김진근, 개발 블로그, 블로그"
        />
        <meta name="author" content="김진근" />
        <meta name="og:site_name" content="김진근의 Devlog" />
        <meta name="og:title" content="김진근의 devlog" />
        <meta
          name="og:description"
          content="개발하며 이것저것을 기록하는 블로그"
        />
        <meta name="og:type" content="blog" />
        <meta property="og:url" content="https://devlog-kjg04.vercel.app/" />
        <meta name="twitter:title" content="김진근의 devlog" />
        <meta
          name="twitter:description"
          content="개발하며 이것저것을 기록하는 블로그"
        />
        <meta name="twitter:card" content="blog" />
      </Head>
      <Spacer y={3} />
      <Container sm>
        <Grid.Container css={gridCSS}>
          <Grid md={4}>
            <ProfileContainer>
              <ProfileImageContainer>
                <Image
                  src="/img/profile-image.webp"
                  alt="profile"
                  height={200}
                  width={200}
                />
              </ProfileImageContainer>
              <Spacer y={1} />
              <Text h4>김진근</Text>
              <ButtonContainer>
                <Link
                  href="mailto:freedom7113@gmail.com"
                  aria-label="contact email"
                >
                  <svg
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill={theme.colors.gray900.value}
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    />
                  </svg>
                </Link>
                <Link href="https://github.com/KJG04" target="_blank">
                  <GithubLogo />
                </Link>
              </ButtonContainer>
            </ProfileContainer>
          </Grid>
          <Grid md={8} css={descritpionCSS}>
            <div>
              안녕하세요 👋
              <br />
              디자인과 UI/UX에 관심이 많은 주니어 개발자 김진근입니다.
              <br />
              주로 Typescript와 React, Nextjs를 사용해 웹 프론트엔드를
              개발합니다. React Native로 iOS와 Android 앱 개발을 할 수 있습니다.
              <br />
              <br />
              UI/UX, 특히 UX에 관심이 많습니다. 더 나은 UX를 만들기 위해
              고민하고 디자인합니다. 참여한 대부분 프로젝트에서 프론트엔드
              개발과 제품 디자인을 맡았습니다.
              <br />
              <br />
              &apos;어제의 나보다 성장한 오늘의 나&apos;가 되기위해 노력합니다.
              뛰어난 사람이 되기 위해 끊임없이 공부합니다.
            </div>
          </Grid>
        </Grid.Container>
        <Spacer y={3} />
        <Divider />
        <Spacer y={3} />
        <RecentlyPost recentlyPost={recentlyPost} />
        <Spacer y={3} />
      </Container>
    </>
  );
};

export default memo(Home);

const ProfileImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray100.value};
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.hr`
  background-color: var(--nextui-colors-gray600);
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: center;
`;
