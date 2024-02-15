import { motion } from 'framer-motion'
import MathpangActivity from './MathpangActivity'
import ModoodocActivity from './ModoodocActivity'

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
      <motion.div className="text-6xl font-black" {...slideAnimationProps}>
        Activity
      </motion.div>
      <div className="mt-16">
        <MathpangActivity />
        <div className="mt-16" />
        <ModoodocActivity />
      </div>
    </section>
  )
}

export default ActivitySection
