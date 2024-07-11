import GithubLogo from '#components/GithubLogo'
import RecentlyPost from '#components/RecentlyPost'
import ProfileImage from 'public/images/profile-image.webp'
import { Post } from '#types'

import type { NextPage } from 'next'
import Image from 'next/image'
import { memo } from 'react'
import { Spacer } from '@nextui-org/spacer'
import { Link } from '@nextui-org/link'
import EmailLogo from '#components/EmailLogo'

interface PropsType {
  recentlyPost: Post[]
}

const Home: NextPage<PropsType> = (props) => {
  const { recentlyPost } = props

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
 "@context": "http://schema.org",
 "@type": "WebSite",
 "name": "김진근의 devlog",
 "url": "https://devlog-kjg04.vercel.app/",
 "author": {
  "@type": "Person",
  "name": "김진근"
 }
}`,
        }}
      />
      <Spacer y={16} />
      <div className="relative z-10 m-auto max-w-screen-lg px-6">
        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-12">
            <div className="flex flex-col items-center">
              <div>
                <Image
                  src={ProfileImage}
                  alt="profile"
                  height={200}
                  width={200}
                  className="h-[200px] w-[200px] select-none rounded-full"
                  placeholder="blur"
                  priority
                />
              </div>
              <Spacer y={5} />
              <h4 className="text-lg font-semibold">김진근</h4>
              <Spacer y={3} />
              <div className="flex justify-center gap-x-[1rem]">
                <Link
                  href="mailto:freedom7113@gmail.com"
                  aria-label="이메일을 보내려면 여기를 클릭하세요"
                >
                  <EmailLogo />
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
            </div>
          </div>
        </div>
        <Spacer y={16} />
        <hr className="border-zinc-700" />
        <Spacer y={16} />
        <RecentlyPost recentlyPost={recentlyPost} />
        <Spacer y={16} />
      </div>
    </>
  )
}

export default memo(Home)
