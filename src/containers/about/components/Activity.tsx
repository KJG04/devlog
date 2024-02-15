import { motion } from 'framer-motion'
import { PropsWithChildren, ReactNode } from 'react'

const slideUpInitial = { opacity: 0, y: 10 } as const
const slideUpAnimate = { opacity: 1, y: 0 } as const
const viewport = { once: true, margin: '0px 0px -50px 0px' } as const

const slideAnimationProps = {
  initial: slideUpInitial,
  whileInView: slideUpAnimate,
  viewport: viewport,
} as const

interface ActivityPropsType {
  title: ReactNode
  subtitle?: ReactNode
  date: ReactNode
  description?: ReactNode
}

const Activity = (props: PropsWithChildren<ActivityPropsType>) => {
  const { date, description, title, children, subtitle } = props

  return (
    <>
      <motion.div {...slideAnimationProps}>
        <div className="text-2xl font-bold">{title}</div>
        {subtitle && <div className="text-lg text-zinc-400">{subtitle}</div>}
        <div className="text-lg text-zinc-400">{date}</div>
      </motion.div>
      {description && (
        <motion.div className="mt-4" {...slideAnimationProps}>
          {description}
        </motion.div>
      )}
      <div className="mt-4" />
      {children && (
        <motion.div {...slideAnimationProps}>
          <div className="mt-2">{children}</div>
        </motion.div>
      )}
    </>
  )
}

export default Activity
