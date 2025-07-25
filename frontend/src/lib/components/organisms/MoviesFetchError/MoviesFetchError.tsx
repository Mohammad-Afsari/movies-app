import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

export const MoviesFetchError = () => {
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
        Error loading the page.
      </Typography>

      <Link href="/">
        <Button variant="contained" size="large">
          Go to Homepage
        </Button>
      </Link>
    </Box>
  )
}
