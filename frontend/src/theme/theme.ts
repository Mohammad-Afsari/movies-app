import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      '@media (min-width:376px)': {
        fontSize: '4.5rem',
      },
      '@media (min-width:768px)': {
        fontSize: '6rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      '@media (min-width:376px)': {
        fontSize: '3.5rem',
      },
      '@media (min-width:768px)': {
        fontSize: '4.5rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (min-width:376px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:768px)': {
        fontSize: '3rem',
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      '@media (min-width:376px)': {
        fontSize: '2rem',
      },
      '@media (min-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      '@media (min-width:376px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:768px)': {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      '@media (min-width:376px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:768px)': {
        fontSize: '1.5rem',
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
