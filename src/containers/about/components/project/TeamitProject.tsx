import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { twMerge } from 'tailwind-merge'
import { Chip } from '@nextui-org/chip'
import { navigationBarVisibleAtom } from '#atoms/navigationBarVisible'
import { Link, LinkIcon } from '@nextui-org/link'
import GithubLogo from '#components/GithubLogo'
import Image from 'next/image'
import Teamit from 'public/images/teamit.png'

const MotionImage = motion(Image)

const slideUpInitial = { opacity: 0, y: 10 } as const
const slideUpAnimate = { opacity: 1, y: 0 } as const
const viewport = { once: true, margin: '0px 0px -50px 0px' } as const

const slideAnimationProps = {
  initial: slideUpInitial,
  whileInView: slideUpAnimate,
  viewport: viewport,
} as const

const TeamitProject = () => {
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
            <MotionImage
              width="150"
              height="150"
              src={Teamit}
              alt="teamit 이미지"
              className="block h-[150px] w-[150px] rounded-3xl"
              {...slideAnimationProps}
            />

            <motion.div
              initial={slideUpInitial}
              animate={isHeaderVisible ? slideUpInitial : slideUpAnimate}
              className="mt-4 hidden sm:block"
            >
              <div className="font-bold">Teamit</div>
              <div className="text-zinc-400">팀 프로젝트</div>
              <div className="text-zinc-400">
                프론트엔드 개발 및 UI/UX 디자인
              </div>
              <div className="text-zinc-400">2022.01 ~ 2022.05</div>
              <Link
                color="foreground"
                aria-label="깃허브 저장소를 방문하고 싶으시면 여기를 눌러주세요."
                href="https://github.com/DSM-TeaMit/Nutella"
                target="_blank"
                className="mt-2"
              >
                <GithubLogo size={24} />
                <div className="ml-2" />
                Github
                <LinkIcon />
              </Link>
              <Link
                href="https://fate-course-159.notion.site/Teamit-578ad0c443fa409e816e3fa836f118eb"
                target="_blank"
                color="foreground"
              >
                자세히 보기 <LinkIcon />
              </Link>

              <br />
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div {...slideAnimationProps} ref={headerRef}>
            <div className="text-2xl font-bold">Teamit</div>
            <div className="text-lg text-zinc-400">팀 프로젝트</div>
            <div className="text-zinc-400">프론트엔드 개발 및 UI/UX 디자인</div>
            <div className="text-lg text-zinc-400">2022.01 ~ 2022.05</div>
            <div className="mt-2 flex items-center gap-2">
              <Link
                color="foreground"
                aria-label="깃허브 저장소를 방문하고 싶으시면 여기를 눌러주세요."
                href="https://github.com/DSM-TeaMit/Nutella"
                target="_blank"
              >
                <GithubLogo size={24} />
                <div className="ml-2" />
                Github
                <LinkIcon />
              </Link>
              <Link
                href="https://fate-course-159.notion.site/Teamit-578ad0c443fa409e816e3fa836f118eb"
                target="_blank"
                color="foreground"
              >
                자세히 보기 <LinkIcon />
              </Link>
            </div>
          </motion.div>
          <motion.div className="mt-4" {...slideAnimationProps}>
            사용자가 간편하게 온라인 웹 상에서 학교 프로젝트와 보고서 관리를
            쉽게 할 수 있도록 하는 서비스.
          </motion.div>
          <motion.div
            className="mt-4 flex flex-wrap gap-1.5"
            {...slideAnimationProps}
          >
            <Chip>React</Chip>
            <Chip>Typescript</Chip>
            <Chip>React Query</Chip>
            <Chip>Emotion</Chip>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="mt-2">
              프론트엔드 2명, 백엔드 1명 구성으로 진행한 프로젝트입니다.
              <br />
              학교장 인증제중 하나인 ‘프로젝트 보고서 작성’을 위해 프로젝트를
              진행한 후 보고서를 작성하여 선생님께 제출해야 하는데 모든 과정이
              오프라인으로 진행 되어서 불편하였습니다. 이런 불편함을 고치기 위해
              온라인 상에서 보고서 작성의 모든 과정을 진행 할 수 있도록 서비스를
              기획하였습니다. <br /> React Query를 사용하여 캐싱과 개발 툴로
              개발 경험과 유저 경험을 개선하였고, custom hook을 작성하여
              중복되는 코드를 최소화했습니다. 노션과 같은 사용자 경험을 위해
              비슷한 마크다운 입력과 이미지 삽입 기능도 구현하였습니다.
              <br />
              <Link
                href="https://fate-course-159.notion.site/Teamit-578ad0c443fa409e816e3fa836f118eb"
                target="_blank"
              >
                자세히 보기 <LinkIcon />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TeamitProject
