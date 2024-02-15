import { motion } from 'framer-motion'
import MathpangSection from './MathpangSection'
import ModoodocSection from './ModoodocSection'

const slideUpInitial = { opacity: 0, y: 10 } as const
const slideUpAnimate = { opacity: 1, y: 0 } as const
const viewport = { once: true, margin: '0px 0px -50px 0px' } as const

const slideAnimationProps = {
  initial: slideUpInitial,
  whileInView: slideUpAnimate,
  viewport: viewport,
} as const

const WorkSection = () => {
  return (
    <section className="m-auto max-w-screen-lg px-4">
      <motion.h1 className="text-6xl font-black" {...slideAnimationProps}>
        Work
      </motion.h1>
      <div className="mt-16">
        <MathpangSection />
        <div className="mt-16" />
        <ModoodocSection />
      </div>
    </section>
  )
}

export default WorkSection
