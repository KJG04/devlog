import { RefObject, useCallback, useRef, useState } from 'react'

export const useCopy = () => {
  const copy = useCallback(async (text: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      return
    }

    if (!document.queryCommandSupported('copy')) {
      throw new Error()
    }

    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.top = '0'
    textarea.style.left = '0'
    textarea.style.visibility = 'hidden'
    textarea.style.position = 'fixed'

    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()

    document.execCommand('copy')
    document.body.removeChild(textarea)
  }, [])

  return copy
}

export const useCopyButton = (
  preRef: RefObject<HTMLPreElement>,
  copy: (text: string) => void,
) => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>(
    'idle',
  )
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const onCopyPress = useCallback(async () => {
    if (!preRef.current) {
      return
    }

    const text = preRef.current.innerText

    try {
      await copy(text)
      setCopyStatus('success')
    } catch (error) {
      setCopyStatus('error')
    }

    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCopyStatus('idle')
      timeoutRef.current = null
    }, 1000)
  }, [copy, preRef])

  return { onCopyPress, copyStatus }
}
