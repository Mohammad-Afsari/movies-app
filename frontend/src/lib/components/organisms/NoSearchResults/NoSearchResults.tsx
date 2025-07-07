import { Box, Typography } from '@mui/material'

export const NoSearchResults = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" sx={{ padding: 2 }} color="primary">
        Oops...
      </Typography>

      <Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
        No movies found, try searching for another movie
      </Typography>
    </Box>
  )
}
