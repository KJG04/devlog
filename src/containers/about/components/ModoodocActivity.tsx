import Modoodoc from 'public/images/modoodoc.png'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { twMerge } from 'tailwind-merge'
import { Chip } from '@nextui-org/chip'
import { navigationBarVisibleAtom } from '#atoms/navigationBarVisible'

const slideUpInitial = { opacity: 0, y: 10 } as const
const slideUpAnimate = { opacity: 1, y: 0 } as const
const viewport = { once: true, margin: '0px 0px -50px 0px' } as const

const slideAnimationProps = {
  initial: slideUpInitial,
  whileInView: slideUpAnimate,
  viewport: viewport,
} as const

const MotionImage = motion(Image)

const ModoodocActivity = () => {
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
              src={Modoodoc}
              alt="모두닥"
              width={150}
              height={150}
              placeholder="blur"
              className="block h-[150px] w-[150px] rounded-3xl"
              {...slideAnimationProps}
            />
            <motion.div
              initial={slideUpInitial}
              animate={isHeaderVisible ? slideUpInitial : slideUpAnimate}
              className="mt-4 hidden sm:block"
            >
              <div className="font-bold">
                프론트엔드 개발자 및 크로스 플랫폼 앱 개발자 (인턴)
              </div>
              <div className="text-zinc-400">모두닥</div>
              <div className="text-zinc-400">2022. 07. ~ 2022. 10.</div>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div {...slideAnimationProps} ref={headerRef}>
            <div className="text-2xl font-bold">
              프론트엔드 개발자 및 크로스 플랫폼 앱 개발자 (인턴)
            </div>
            <div className="text-lg text-zinc-400">모두닥</div>
            <div className="text-lg text-zinc-400">2022. 07. ~ 2022. 10.</div>
          </motion.div>
          <motion.div className="mt-4" {...slideAnimationProps}>
            모두닥에서 프론트엔드 개발 및 크로스 플랫폼 앱 개발을 하였습니다.
          </motion.div>
          <motion.div
            className="mt-4 flex flex-wrap gap-1.5"
            {...slideAnimationProps}
          >
            <Chip>React</Chip>
            <Chip>React Native</Chip>
            <Chip>Django</Chip>
            <Chip>Javascript</Chip>
            <Chip>Typescript</Chip>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="mt-2">
              모두닥에서 3개월동 안의 인턴생활을 하였습니다.
              <br /> 그동안 React Native를 사용해 모두닥 앱 개발과 바닐라JS를
              사용해 Django 프론트엔드 웹 개발을 하였습니다.
              <br />
              <br />
              모두닥 웹의 검색 Flow를 개선했습니다.
              <br />
              모두닥 앱의 예약 상태 화면을 개선했습니다.
              <br />
              웹/앱의 버그, 이슈를 해결했습니다.
              <br />
              <br />
              스프린트에 참여해 빠르게 문제를 찾고 문제를 해결할 수 있는
              아이디어를 실험하고 결과를 내는 과정을 경험해보았습니다.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ModoodocActivity
