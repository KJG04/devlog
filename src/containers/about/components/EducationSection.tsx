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

const EducationSection = () => {
  return (
    <>
      <section className="m-auto max-w-screen-lg px-4">
        <motion.h1 className="text-6xl font-black" {...slideAnimationProps}>
          Education
        </motion.h1>
        <div className="mt-16" />
        <Activity
          title="대덕소프트웨어마이스터고등학교"
          subtitle="소프트웨어개발과"
          date="2020. 03. ~ 2023. 02."
        />
        <div className="mt-16" />
        <Activity
          title="스파르타 코딩클럽 KDT 실무형 스프링 백엔드 엔지니어 양성과정 6회차"
          subtitle="Spring 백엔드 개발"
          date="2024. 08. ~ 2024. 11."
        />
      </section>
    </>
  )
}

export default EducationSection
