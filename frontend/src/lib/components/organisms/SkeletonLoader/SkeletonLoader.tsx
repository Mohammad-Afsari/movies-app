import { Box, Grid, Skeleton, styled } from '@mui/material'
import Paper from '@mui/material/Paper'

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

export const SkeletonLoader = () => {
  const NUMBER_OF_MOVIES = 10

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {Array.from({ length: NUMBER_OF_MOVIES }).map((_, index) => (
          <Grid key={index}>
            <Item sx={{ padding: 0, borderRadius: 2, overflow: 'hidden' }}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  backgroundColor: '#747474',
                  minHeight: '500px',
                }}
              />
              <Box sx={{ p: 1 }}>
                <Skeleton variant="text" />
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
