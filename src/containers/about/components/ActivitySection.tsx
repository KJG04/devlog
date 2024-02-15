import { motion } from 'framer-motion'
import Activity from './Activity'

const slideUpInitial = { opacity: 0, y: 10 } as const
const slideUpAnimate = { opacity: 1, y: 0 } as const
const viewport = { once: true, margin: '0px 0px -50px 0px' } as const

const slideAnimationProps = {
  initial: slideUpInitial,
  whileInView: slideUpAnimate,
  viewport: viewport,
} as const

const ActivitySection = () => {
  return (
    <section className="m-auto max-w-screen-lg px-4">
      <motion.h1 className="text-6xl font-black" {...slideAnimationProps}>
        Activity
      </motion.h1>
      <div className="mt-16">
        <Activity
          title="2021 지방기능경기대회 동상 수상"
          subtitle="정보기술 분야"
          date="2021. 04."
        >
          학교에서 지방기능경기대회에 참여할 수 있는 기회를 가지게 되어서
          정보기술 분야에 참여하였습니다. <br />
          Java와 MySQL을 사용하여 주어진 응용 프로그램을 개발하는 것이
          목표였습니다. 대회 준비를 하며 Java와 MySQL을 공부한것이 개발자로서
          많은 도움이 되었다고 생각합니다. <br />
          많은 노력끝에 동상을 타게 되었습니다.
        </Activity>
        <div className="mt-16" />
        <Activity
          title="2021 전국기능경기대회 참여"
          subtitle="정보기술 분야"
          date="2021. 10."
        >
          지방기능경기대회에서 메달권에 들어가서 전국기능경기대회에 참여할
          자격을 얻게 되었습니다. <br /> 끝까지 가보자는 마음으로 정보기술
          분야에 참여하게 되었습니다. <br /> 아쉽게도 상을 타진 못했지만 많은
          사람과 경쟁하며 배운 Java와 MySQL의 지식이 개발자로서의 좋은 경험이
          되었다고 생각합니다.
        </Activity>
        <div className="mt-16" />
        <Activity
          title="2021 소프트웨어마이스터고등학교 연합 해커톤 참여"
          subtitle="정보기술 분야"
          date="2021. 11."
        >
          다른 소프트웨어마이스터고등학교 팀원들과 연합 해커톤을 진행하였습니다.
          <br />
          거의 모르는 사람과 프로젝트를 진행하는 경험이 특별하였습니다.
          <br />
          안드로이드 앱과 웹뷰를 처음 연결해보는 것이여서 좋은 경험이
          되었습니다.
        </Activity>
        <div className="mt-16" />
        <Activity
          title="정보처리기능사 취득"
          subtitle="한국산업인력공단"
          date="2021. 04."
        />
        <div className="mt-16" />
        <Activity
          title="ISTQB CTFL 취득"
          subtitle="사단법인 케이에스티큐비(KSTQB)"
          date="2022"
        />
      </div>
    </section>
  )
}

export default ActivitySection
