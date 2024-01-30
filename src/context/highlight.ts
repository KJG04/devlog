'use client'

import { createContext, useContext } from 'react'

const highlightContext = createContext<number[]>([])

export const useHighlightContext = () => useContext(highlightContext)

export default highlightContext
