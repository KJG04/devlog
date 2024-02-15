import { Chip } from '@nextui-org/chip'
import { motion } from 'framer-motion'

const slideUpInitial = { opacity: 0, y: 10 } as const
const slideUpAnimate = { opacity: 1, y: 0 } as const
const viewport = { once: true, margin: '0px 0px -50px 0px' } as const

const slideAnimationProps = {
  initial: slideUpInitial,
  whileInView: slideUpAnimate,
  viewport: viewport,
} as const

const MotionChip = motion(Chip)

const firstSkillList = [
  'React',
  'Next.js',
  'Javascript',
  'Typescript',
  'GraphQL',
  'Emotion',
  'React Native',
  'React Query',
  'Stroybook',
]

const secondSkillList = ['Recoil', 'TailwindCSS', 'Framer Motion', 'i18n']

const SkillSection = () => {
  return (
    <section className="m-auto max-w-screen-lg px-4">
      <motion.div className="text-6xl font-black" {...slideAnimationProps}>
        Skill
      </motion.div>
      <motion.div className="mt-6" {...slideAnimationProps}>
        깊이 이해하고, 실무에서 사용해본 적 있어요.
      </motion.div>
      <div className="mt-4 flex max-w-[500px] flex-wrap gap-2">
        {firstSkillList.map((name, index) => (
          <MotionChip
            color="primary"
            key={name}
            {...slideAnimationProps}
            transition={{ delay: 0.025 * index }}
          >
            {name}
          </MotionChip>
        ))}
      </div>
      <motion.div className="mt-6" {...slideAnimationProps}>
        다루어본적 있어요.
      </motion.div>
      <div className="mt-4 flex flex-wrap gap-2">
        {secondSkillList.map((name, index) => (
          <MotionChip
            color="primary"
            variant="flat"
            key={name}
            {...slideAnimationProps}
            transition={{ delay: 0.025 * index }}
          >
            {name}
          </MotionChip>
        ))}
      </div>
    </section>
  )
}

export default SkillSection
