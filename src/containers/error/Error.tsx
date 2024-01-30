'use client'

import { Button } from '@nextui-org/button'
import { Spacer } from '@nextui-org/spacer'
import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'

const Error = () => {
  const router = useRouter()
  const onClickBack = useCallback(() => {
    router.back()
  }, [router])

  const onClickHome = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="m-0 text-9xl font-bold">500</h1>
      <Spacer y={8} />
      <div className="text-center text-2xl font-semibold text-zinc-500">
        페이지를 가져오는 도중 오류가 발생했습니다.
      </div>
      <Spacer y={4} />
      <div className="flex">
        <Button size="md" color="primary" onClick={onClickBack}>
          뒤로가기
        </Button>
        <Spacer x={4} />
        <Button
          color="primary"
          variant="bordered"
          size="md"
          onClick={onClickHome}
        >
          홈으로
        </Button>
      </div>
    </div>
  )
}

export default memo(Error)
