import { Box, Typography } from '@mui/material'

export const HomePage = () => {
  return (
    <Box
      display="flex"
      textAlign="center"
      justifyContent="center"
      height="90vh"
      alignItems="center"
    >
      <Typography variant="h1">Welcome to the Movie library</Typography>
    </Box>
  )
}
