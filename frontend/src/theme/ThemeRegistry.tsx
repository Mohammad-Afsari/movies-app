'use client'

import * as React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import createEmotionServer from '@emotion/server/create-instance'
import { emotionCache } from '@/lib/misc/emotionCache/emotionCache'
import theme from './theme'

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(emotionCache)

  useServerInsertedHTML(() => {
    const chunks = extractCriticalToChunks(emotionCache.sheet.toString())
    const styles = constructStyleTagsFromChunks(chunks)
    return <style dangerouslySetInnerHTML={{ __html: styles }} />
  })

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
