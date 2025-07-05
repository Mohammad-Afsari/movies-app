'use client'

import ThemeRegistry from '@/theme/ThemeRegistry'
import classes from './global.module.css'
import SearchAppBar from '@/lib/components/organisms/SearchAppBar/SearchBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={classes.root}>
        <QueryClientProvider client={queryClient}>
          <ThemeRegistry>
            <SearchAppBar />
            {children}
          </ThemeRegistry>
        </QueryClientProvider>
      </body>
    </html>
  )
}
