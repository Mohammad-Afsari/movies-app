'use client'

import { fetchMovieDetails } from '@/utils/getMovies'
import { useQuery } from '@tanstack/react-query'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Divider,
  Button,
} from '@mui/material'
import Image from 'next/image'
import PlaceholderImage from '../../../misc/images/placeholder.jpg'
import { useRouter } from 'next/navigation'

type Props = {
  id: string
}

export const MovieDetailPage = ({ id }: Props) => {
  const router = useRouter()

  const { data, isLoading, error } = useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
  })

  // TODO: Skeleton loader
  if (isLoading) return <Typography>Loading...</Typography>
  if (error || !data)
    return <Typography>Error loading movie details</Typography>

  return (
    <Box
      sx={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Box mb={2}>
        <Button variant="contained" onClick={() => router.back()}>
          ← Back
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Grid container spacing={4} display="flex" justifyContent="center">
          <Grid
            sx={{
              xs: 12,
              md: 4,
            }}
          >
            <Card>
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  minHeight: '500px',
                }}
              >
                {data.Poster !== 'N/A' ? (
                  <CardMedia
                    component="img"
                    image={data.Poster}
                    alt={data.Title}
                    sx={{ width: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <Image
                    src={PlaceholderImage}
                    alt={data.Title}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                )}
              </Box>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }} sx={{ width: '100%' }}>
            <Card sx={{ height: '100%', width: '100%' }}>
              <CardContent>
                <Typography variant="h4">{data.Title}</Typography>
                <Typography variant="subtitle1">
                  Release Date: {data.Released}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body1">Plot: {data.Plot}</Typography>

                <Typography variant="body2" color="textSecondary">
                  Directed by: {data.Director}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Actors: {data.Actors}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {data.Ratings.length !== 0 && (
                  <Box>
                    <Typography variant="subtitle1">Ratings:</Typography>
                    {data.Ratings.map((item, i) => (
                      <Typography key={i} variant="body2">
                        {item.Source}: {item.Value}
                      </Typography>
                    ))}
                  </Box>
                )}

                <Box mt={2}>
                  <Typography variant="body2">
                    IMDb: {data.imdbRating} ({`${data.imdbVotes} Votes`})
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
