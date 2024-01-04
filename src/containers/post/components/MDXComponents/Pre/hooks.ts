import { useMemo } from 'react'

export const useHighlightValue = (line: string | undefined) =>
  useMemo(() => {
    return (
      line
        ?.split(',')
        .map((num) => {
          if (isNaN(Number(num))) {
            const [start, end] = num.split('-')
            const startNum = Number(start)
            const endNum = Number(end)
            const arr = []

            for (let i = startNum; i <= endNum; i++) {
              arr.push(i)
            }

            return arr
          } else {
            return Number(num)
          }
        })
        .flat() ?? []
    )
  }, [line])

export const usePathValue = (path: string | undefined) => path?.split('/')
