import { Typography } from '@mui/material'
import classes from './Homepage.module.css'

export const HomePage = () => {
  return (
    <div className={classes.root}>
      <Typography variant="h1">Welcome to the Movie library</Typography>
    </div>
  )
}
