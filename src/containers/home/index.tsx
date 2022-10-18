import { GithubLogo, RecentlyPost } from '#components';
import { Post } from '#types';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Container, Grid, Link, Spacer, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

interface PropsType {
  recentlyPost: Post[];
}

const Home: NextPage<PropsType> = (props) => {
  const { recentlyPost } = props;
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>김진근의 devlog</title>
        <meta
          name="description"
          content="개발하며 이것저것을 기록하는 블로그"
        />
      </Head>
      <Spacer y={3} />
      <Container sm>
        <Grid.Container css={{ width: '100%', justifyContent: 'center' }}>
          <Grid md={4}>
            <ProfileContainer>
              <ProfileImageContainer>
                <Image
                  src="/technology_man.svg"
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
          <Grid md={8} css={{ flexDirection: 'column' }}>
            <div>
              안녕하세요 👋
              <br />
              디자인하는 주니어 프론트엔드 개발자 김진근입니다!
              <br />
              <br />
              저는 사용자 경험을 생각합니다. 더 나은 사용자 경험을 위해 UI/UX
              디자인을 독학하였고, 진행한 프로젝트에서 디자인과 UI/UX 개발을
              주도적으로 하였습니다. 이런 경험과 기본 지식이 디자이너와의 협업
              과정이나 제품의 퀄리티에 좋은 영향을 미친다고 생각합니다.
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

export default Home;

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
