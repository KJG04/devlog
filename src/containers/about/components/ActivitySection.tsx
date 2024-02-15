import { motion } from 'framer-motion'
import Image from 'next/image'

import Modoodoc from 'public/images/modoodoc.png'
import Mathpang from 'public/images/mathpang.webp'

const slideUpInitial = { opacity: 0, y: 10 }
const slideUpAnimate = { opacity: 1, y: 0 }
const viewport = { once: true }

const ActivitySection = () => {
  return (
    <section className="m-auto max-w-screen-lg px-4">
      <motion.div
        className="text-6xl font-black"
        initial={slideUpInitial}
        whileInView={slideUpAnimate}
        viewport={viewport}
      >
        Activity
      </motion.div>
      <div className="mt-16">
        <div>
          <div className="flex">
            <Image
              src={Mathpang}
              alt="매쓰팡"
              width={150}
              height={150}
              placeholder="blur"
              className="rounded-3xl"
            />
            <div className="ml-4">
              <div className="text-2xl font-bold">
                프론트엔드 개발자 및 크로스플랫폼 앱 개발자
              </div>
              <div className="text-lg text-zinc-400">매쓰팡</div>
              <div className="text-lg text-zinc-400">2022. 11. ~ 2024. 01.</div>
              <div className="mt-4">
                매쓰팡에서 프론트엔드 개발 및 크로스플랫폼 앱 개발을 하였습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitySection
