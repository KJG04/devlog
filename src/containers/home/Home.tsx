import GithubLogo from '#components/GithubLogo';
import RecentlyPost from '#components/RecentlyPost';
import { Post } from '#types';
import { Link, Spacer } from '@nextui-org/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { memo } from 'react';
import ProfileImage from 'public/images/profile-image.webp';

interface PropsType {
  recentlyPost: Post[];
}

const Home: NextPage<PropsType> = (props) => {
  const { recentlyPost } = props;

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
      <Spacer y={16} />
      <div className="px-6 max-w-screen-lg m-auto">
        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-12">
            <div className="flex flex-col items-center">
              <div>
                <Image
                  src={ProfileImage}
                  alt="profile"
                  height={200}
                  width={200}
                  className="w-[200px] h-[200px] rounded-full"
                  placeholder="blur"
                  priority
                />
              </div>
              <Spacer y={5} />
              <h4 className="text-lg font-semibold">김진근</h4>
              <Spacer y={3} />
              <div className="flex gap-x-[1rem] justify-center">
                <Link
                  href="mailto:freedom7113@gmail.com"
                  aria-label="이메일을 보내려면 여기를 클릭하세요"
                >
                  <svg
                    width={30}
                    height={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      className="fill-zinc-900 dark:fill-zinc-100"
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/KJG04"
                  target="_blank"
                  aria-label="Github에 방문하고 싶으시면 여기를 클릭하세요"
                >
                  <GithubLogo />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="leading-relaxed">
              안녕하세요 👋
              <br />
              주니어 개발자 김진근입니다.
              <br />
              주로 Typescript와 React, Nextjs를 사용해 웹 프론트엔드를
              개발합니다. React Native로 iOS와 Android 앱 개발을 할 수 있습니다.
              <br />
              <br />
              &apos;어제의 나보다 성장한 오늘의 나&apos;가 되기위해 노력합니다.
              뛰어난 사람이 되기 위해 끊임없이 공부합니다.
              <br />
              <br />
              현재 매쓰팡의 프론트엔드 개발을 맡고 있습니다.
            </div>
          </div>
        </div>
        <Spacer y={16} />
        <hr className="border-zinc-400 dark:border-zinc-700" />
        <Spacer y={16} />
        <RecentlyPost recentlyPost={recentlyPost} />
        <Spacer y={16} />
      </div>
    </>
  );
};

export default memo(Home);
