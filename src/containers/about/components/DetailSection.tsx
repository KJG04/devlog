import EmailLogo from '#components/EmailLogo'
import GithubLogo from '#components/GithubLogo'
import { Link } from '@nextui-org/link'
import Image from 'next/image'
import ProfileImage from 'public/images/profile-image.webp'

const DetailSection = () => {
  return (
    <section>
      <div className="mt-3 flex flex-col items-center">
        <Image
          src={ProfileImage}
          alt="profile"
          height={200}
          width={200}
          className="h-[200px] w-[200px] select-none rounded-full"
          placeholder="blur"
          priority
        />
        <div className="mt-6" />
        <h2 className="text-center text-4xl font-extrabold">김진근</h2>
        <div className="mt-2" />
        <h2 className="text-center text-2xl font-medium text-zinc-400">
          프론트엔드 개발자
        </h2>
        <div className="mt-3 flex gap-3">
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
      <div className="mt-12" />
      <div className="m-auto max-w-screen-lg px-4">
        <div className="text-zinc-200">
          <h1 className="mb-3 text-3xl font-medium leading-[1.4]">
            👋 안녕하세요.
            <br /> 주도적으로 서비스의 문제를 찾고 개선을 멈추지 않는 개발자
            김진근입니다.
          </h1>
          <p>
            React, Next.js를 사용해 웹 서비스를 개발, 유지보수 해보았습니다.
            React Native를 사용해 크로스 플랫폼 앱 개발을 해보았습니다.
          </p>
          <p>
            &apos;어제의 나보다 성장한 오늘의 나&apos;가 되기위해 노력합니다.
            뛰어난 사람이 되기 위해 끊임없이 공부합니다.
          </p>
          <p>
            개발하며 마주한 문제를 해결하는 것을 즐깁니다. 처음 겪어보는 문제를
            해결할 때 성장한다고 생각하고, 문제를 피하지 않습니다.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DetailSection
