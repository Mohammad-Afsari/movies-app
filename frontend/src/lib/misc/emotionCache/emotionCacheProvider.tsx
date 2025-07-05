'use client'

import { CacheProvider } from '@emotion/react'
import { emotionCache } from './emotionCache'
import { ReactNode } from 'react'

export const EmotionProvider = ({ children }: { children: ReactNode }) => (
  <CacheProvider value={emotionCache}>{children}</CacheProvider>
)
