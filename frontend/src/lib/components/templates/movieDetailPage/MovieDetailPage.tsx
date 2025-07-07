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
import CircularIndeterminate from '../../organisms/Loader/Loader'

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

  if (isLoading)
    return (
      <Box position="fixed" top="50%" left="50%">
        <CircularIndeterminate />
      </Box>
    )

  if (error || !data)
    return <Typography>Error loading movie details.</Typography>

  return (
    <Box sx={{ px: 2, py: 4, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: '1200px', textAlign: 'left' }}>
        <Button
          variant="contained"
          onClick={() => router.back()}
          sx={{ my: 3 }}
        >
          ← Back
        </Button>

        <Grid container spacing={4}>
          <Grid>
            <Card>
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '2/3',
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
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </Box>
            </Card>
          </Grid>

          <Grid sx={{ width: '100%' }}>
            <Card>
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
