'use client'

import { useSearchParams } from 'next/navigation'
import { MovieListingPage } from '@/lib/components/templates/movieListingPage/MovieListingPage'
import { Typography, Box } from '@mui/material'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''
  const page = Number(searchParams.get('page')) || 1

  if (!query) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6">Please enter a search term...</Typography>
      </Box>
    )
  }

  return <MovieListingPage searchTerm={query} page={page} />
}
