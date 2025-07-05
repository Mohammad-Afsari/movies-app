'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchMovies, SearchResults } from '@/utils/getMovies'
import { useRouter } from 'next/navigation'
import { Button, Typography, Box, styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import classes from './MovieListingPage.module.css'
import Image from 'next/image'
import PlaceholderImage from '../../../misc/images/placeholder.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles?.('dark', {
    backgroundColor: '#1A2027',
  }),
}))

type Props = {
  searchTerm: string
  page: number
}

export const MovieListingPage = ({ searchTerm, page }: Props) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(page)

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', searchTerm, currentPage],
    queryFn: () => fetchMovies(searchTerm, currentPage),
    enabled: !!searchTerm,
    refetchOnWindowFocus: false,
  })

  const totalResults = Number(data?.totalResults || 0)
  const totalPages = Math.ceil(totalResults / 10)

  const changePage = (newPage: number) => {
    router.push(
      `/search?query=${encodeURIComponent(searchTerm)}&page=${newPage}`,
    )
  }

  if (isLoading) return <div className={classes.root}>Loading...</div>

  if (error) return <div className={classes.root}>Error loading movies...</div>

  if (!data?.Search?.length)
    return <div className={classes.root}>No movies found</div>

  // TODO: Make the images items into links
  // TODO: Skeleton loader
  // TODO: size of the cards make them maybe the same?
  // TODO: spinner?

  return (
    <Box className={classes.root} sx={{ padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {data.Search.map((movie: SearchResults) => (
          <Grid key={movie.imdbID}>
            <Item sx={{ padding: 0, borderRadius: 2, overflow: 'hidden' }}>
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  backgroundColor: '#eee',
                  minHeight: '500px',
                }}
              >
                {movie.Poster !== 'N/A' ? (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <Image
                    src={PlaceholderImage}
                    alt={movie.Title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100%"
                  />
                )}
              </Box>
              <Box sx={{ p: 1 }}>
                <Typography
                  variant="subtitle2"
                  noWrap
                  title={movie.Title}
                  sx={{ fontWeight: 500 }}
                >
                  {movie.Title}
                </Typography>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>

      <Box
        mt={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Button
          variant="contained"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          Prev
        </Button>

        <Typography variant="subtitle1">
          Page {currentPage} of {totalPages}
        </Typography>

        <Button
          variant="contained"
          disabled={currentPage === totalPages}
          onClick={() => changePage(currentPage + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}
