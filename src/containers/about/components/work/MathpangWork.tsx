import Mathpang from 'public/images/mathpang.webp'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { twMerge } from 'tailwind-merge'
import { Chip } from '@nextui-org/chip'
import { Link, LinkIcon } from '@nextui-org/link'
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

const MathpangWork = () => {
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
              src={Mathpang}
              alt="매쓰팡"
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
                프론트엔드 개발자 및 크로스 플랫폼 앱 개발자
              </div>
              <div className="text-zinc-400">매쓰팡</div>
              <div className="text-zinc-400">2022. 11. ~ 2024. 01.</div>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div {...slideAnimationProps} ref={headerRef}>
            <div className="text-2xl font-bold">
              프론트엔드 개발자 및 크로스 플랫폼 앱 개발자
            </div>
            <div className="text-lg text-zinc-400">매쓰팡</div>
            <div className="text-lg text-zinc-400">2022. 11. ~ 2024. 01.</div>
          </motion.div>
          <motion.div className="mt-4" {...slideAnimationProps}>
            매쓰팡에서 프론트엔드 개발 및 크로스 플랫폼 앱 개발을 하였습니다.
          </motion.div>
          <motion.div
            className="mt-4 flex flex-wrap gap-1.5"
            {...slideAnimationProps}
          >
            <Chip>React</Chip>
            <Chip>React Native</Chip>
            <Chip>Next.js</Chip>
            <Chip>Typescript</Chip>
            <Chip>GraphQL</Chip>
            <Chip>React Query</Chip>
            <Chip>Styled Component</Chip>
            <Chip>Framer Motion</Chip>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="text-zinc-400">2024. 01.</div>
            <div className="text-xl font-medium">멤버십 구독 기능 개발</div>
            <div className="mt-2">
              매월, 매년마다 결제되는 구독기능을 개발하였습니다. 안드로이드와
              iOS 로직 통일을 위해 react-native-iap을 사용하였습니다.
              react-native-iap로 구독 상품을 가져오고 가져온 상품을 웹뷰에서
              보여주고, 결제를 구현했습니다.
            </div>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="text-zinc-400">2023. 11.</div>
            <div className="text-xl font-medium">
              Next.js로 점진적 마이그레이션
            </div>
            <div className="mt-2">
              서비스의 타겟 유저는 동남아시아의 유저인데, 유저 대부분은 느린
              기기와 느린 네트워크를 사용하는 유저였습니다. 기존의 CSR 방식은
              유저가 첫 화면을 볼 수 있을때 까지 많은 시간을 기다려야 하는
              문제가 있었습니다. 예전부터 팀 내에서 이를 해결하고, 개발 경험
              개선을 위해 Next.js로 마이그레이션을 하자는 이야기가 꾸준히
              나왔습니다. 하지만 코드 베이스 전부를 마이그레이션 하기에는
              리스크와 많은 개발 시간이 필요했고, QA 시간도 필요했습니다. 빠르게
              실행하는 현재 상황에 맞지 않는 방법이여서 번번히 뒤로
              미루어졌습니다.
              <br />
              <br />
              그래서 제가 기존 코드를 유지한 채 Next.js로의 마이그레이션을 할
              방법을 찾아서 개발팀에 공유 드렸고, 마이그레이션 작업을 리딩하여
              성공적으로 마이그레이션 하였습니다.
              <br />
              <br />
              <span className="font-bold">
                SSR을 적용해서 First Contentful Paint를 개선
              </span>
              하여 유저 경험을 개선하였고, 기존보다{' '}
              <span className="font-bold">
                빠른 로컬 실행 속도, 빌드 속도로 개발 경험이 개선
              </span>
              되었습니다.
              <br />
              <Link href="/post/gradual-migrate-to-nextjs">
                Create React App에서 Next.js로 점진적 마이그레이션 하기
                <LinkIcon />
              </Link>
            </div>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="text-zinc-400">2023. 07.</div>
            <div className="text-xl font-medium">매쓰팡 앱 개발과 출시</div>
            <div className="mt-2">
              웹 서비스에서 앱 서비스로 전환하기로 결정되어서 React Native로 앱
              개발을 하였습니다. 프론트엔드 개발자 분들이 모두 React 경험이
              있으셔서 적은 러닝커브와 빠른 실행을 위해 React Native를
              사용하기로 결정했습니다. <br /> React Native 사용 경험이 팀 내 저
              밖에 없어서 제가 앱 개발을 리딩하였습니다. 웹뷰와 앱 사이의 로그인
              세션 관리와 인앱 결제를 개발하였습니다.
            </div>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="text-zinc-400">2023. 04.</div>
            <div className="text-xl font-medium">초기 로딩 속도 개선</div>
            <div className="mt-2">
              웹의 초기 로딩이 느리다는 피드백을 받고 원인 분석을 하여 해당
              페이지에 필요없는 코드들도 가져오고 있는 문제를 발견했습니다.
              라우터 기반 코드 분할을 통해 빠른 3G 기준 로딩 파일의 크기를{' '}
              <span className="font-bold">11MB에서 0.4MB</span>로 줄이고 로딩에
              걸리는 시간을{' '}
              <span className="font-bold">
                1.1분에서 6초로 약 90% 속도 개선
              </span>
              을 하였습니다.
              <br />
              <Link href="/post/route-based-code-split">
                라우트 기반 코드분할로 로딩 속도 개선하기
                <LinkIcon />
              </Link>
            </div>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="text-zinc-400">2023. 04.</div>
            <div className="text-xl font-medium">React Query 도입</div>
            <div className="mt-2">
              다양한 캐싱 옵션과 많은 기능이 있는 개발 툴, Suspense와 Error
              boundary 사용을 위해 React Query 도입을 팀원들께 제안드렸습니다.
              React Query 도입을 리딩하여 팀원 분들이 빠르게 사용하실 수 있도록
              기존 apollo client의 개발 경험과 비슷하도록 커스텀 훅을 작성하여
              도입하였습니다.
              <br />
              <Link href="/post/graphql-with-react-query">
                GraphQL과 React Query로 서버 상태 관리하기
                <LinkIcon />
              </Link>
            </div>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="text-zinc-400">2023. 03.</div>
            <div className="text-xl font-medium">앱 전환 기틀 다지기</div>
            <div className="mt-2">
              앱 전환 전 개발적 검증과 사전 작업을 진행하고 리딩하였습니다. 기존
              웹 서비스가 앱의 웹뷰 환경에서 잘 실행이 되는지, 어떤 방식으로
              개발을 하면 좋을지 실험하였습니다. 웹 서비스가 웹뷰 환경에서 잘
              동작되었고, 빠른 배포를 위해 모든 페이지를 웹뷰로 제작하기로
              결정했습니다. 실험 중 웹과 앱 사이의 통신할 때 작성된 코드가
              가독성이 좋지 않고 정해진 규칙이 없어서 휴먼 에러가 발생할 수 있는
              문제를 타입 지정과 Promise 사용을 통해 해결하였습니다. 통신하는
              코드를 훅으로 작성해 재사용성을 높였습니다.
              <Link href="/post/sending-messages-to-and-from-the-web-and-react-native">
                라우트 기반 코드분할로 로딩 속도 개선하기
                <LinkIcon />
              </Link>
            </div>
          </motion.div>
          <div className="mt-4" />
          <motion.div {...slideAnimationProps}>
            <div className="text-zinc-400">2022. 11.</div>
            <div className="text-xl font-medium">코드 리뷰 과정 개선</div>
            <div className="mt-2">
              입사 후, 코드 리뷰 과정에서 리뷰이는 정해진 템플릿이 없어 무엇을
              작성하면 좋을지 고민하는 시간 낭비와 코드 리뷰의 우선순위를 알기
              힘든 문제가 있었습니다. 이를 해결하기 위해 Pn룰 도입을 제안드렸고,
              적용되어서 코드 리뷰 시간을 줄일 수 있었습니다.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MathpangWork
