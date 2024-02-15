import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { twMerge } from 'tailwind-merge'
import { Chip } from '@nextui-org/chip'
import { navigationBarVisibleAtom } from '#atoms/navigationBarVisible'
import { Link, LinkIcon } from '@nextui-org/link'
import GithubLogo from '#components/GithubLogo'

const slideUpInitial = { opacity: 0, y: 10 } as const
const slideUpAnimate = { opacity: 1, y: 0 } as const
const viewport = { once: true, margin: '0px 0px -50px 0px' } as const

const slideAnimationProps = {
  initial: slideUpInitial,
  whileInView: slideUpAnimate,
  viewport: viewport,
} as const

const DevlogSection = () => {
  const visible = useRecoilValue(navigationBarVisibleAtom)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderVisible = useInView(headerRef)

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div>
          <div
            className={twMerge(
              visible ? 'top-[80px]' : 'top-4',
              'block w-[150px] transition-[top] duration-400 sm:sticky',
            )}
          >
            <motion.svg
              width="150"
              height="150"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              className="block h-[150px] w-[150px]"
              {...slideAnimationProps}
            >
              <path
                d="M0 963.588H279.529V845.941H153.412V177.706H279.529V61H0V963.588Z"
                className="fill-zinc-100"
              />
              <path
                d="M1024 963.588V61H744.471V177.706H870.588V845.941H744.471V963.588H1024Z"
                className="fill-zinc-100"
              />
            </motion.svg>
            <motion.div
              initial={slideUpInitial}
              animate={isHeaderVisible ? slideUpInitial : slideUpAnimate}
              className="mt-4 hidden sm:block"
            >
              <div className="font-bold">김진근의 Devlog</div>
              <div className="text-zinc-400">개인 프로젝트</div>
              <div className="text-zinc-400">2022.09 ~ 2022.10</div>
              <Link
                color="foreground"
                aria-label="깃허브 저장소를 방문하고 싶으시면 여기를 눌러주세요."
                href="https://github.com/KJG04/devlog"
                target="_blank"
                className="mt-2"
              >
                <GithubLogo size={24} />
                <div className="ml-2" />
                Github
                <LinkIcon />
              </Link>
              <br />
              <Link
                color="foreground"
                aria-label="배포된 링크를 방문하고 싶으시면 여기를 눌러주세요."
                href="https://devlog-kjg04.vercel.app/"
                target="_blank"
              >
                배포된 링크
                <LinkIcon />
              </Link>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div {...slideAnimationProps} ref={headerRef}>
            <div className="text-2xl font-bold">김진근의 devlog</div>
            <div className="text-lg text-zinc-400">개인 프로젝트</div>
            <div className="text-lg text-zinc-400">2022.09 ~ 2022.10</div>
            <div className="mt-1 flex items-center gap-2">
              <Link
                color="foreground"
                aria-label="깃허브 저장소를 방문하고 싶으시면 여기를 눌러주세요."
                href="https://github.com/KJG04/devlog"
                target="_blank"
              >
                <GithubLogo size={24} />
                <div className="ml-2" />
                Github
                <LinkIcon />
              </Link>
              <Link
                color="foreground"
                aria-label="배포된 링크를 방문하고 싶으시면 여기를 눌러주세요."
                href="https://devlog-kjg04.vercel.app/"
                target="_blank"
              >
                배포된 링크
                <LinkIcon />
              </Link>
            </div>
          </motion.div>
          <motion.div className="mt-4" {...slideAnimationProps}>
            개발하면서 특별하게 겪은 문제나 공유하면 도움이 될 만한 글을
            작성하기 위해 만든 개인 개발 블로그입니다.
          </motion.div>
          <motion.div
            className="mt-4 flex flex-wrap gap-1.5"
            {...slideAnimationProps}
          >
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>Typescript</Chip>
            <Chip>TailwindCSS</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>MDX</Chip>
            <Chip>Vercel</Chip>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="mt-2">
              저의 개성을 담은 개발 블로그를 만들고 싶어 프로젝트를
              시작했습니다. <br />
              글을 저장하는 서버가 필요없는 블로그를 제작하기 위해 글은 MDX로
              작성하고 저장하면 자동으로 작성된 파일 기반으로 페이지가
              만들어지도록 구현했습니다.
              <br />
              <br />
              블로그에서 중요한 것은 빠른 로딩, 가독성, 접근성, 검색엔진 최적화,
              반응형 UI로 정하고 개발하였습니다.
              <br />
              Lighthouse를 사용해 웹 성능 측정을 하여 점수가 낮게 나오는 부분을
              개선했습니다. SSR을 사용해 FCP를 개선하고, metadata를 추가해 SEO
              작업을 하였습니다. 이미지 최적화, 폰트 최적화를 통해 에셋을 줄여
              로딩 시간을 개선하였습니다.
              <br />
              NextUI의 컴포넌트를 사용하여 개발 시간을 줄이고 TailwindCSS를
              사용하여 빌드 시에 스타일을 생성하도록 해 런타임 코드를
              줄였습니다.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DevlogSection
