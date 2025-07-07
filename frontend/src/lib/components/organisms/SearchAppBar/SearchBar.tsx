'use client'

import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { IconButton, Typography } from '@mui/material'
import HomeFilledIcon from '@mui/icons-material/HomeFilled'
import Link from 'next/link'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('xs')]: {
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '40ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}))

export default function SearchAppBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmed = searchTerm.trim()

    if (trimmed) {
      router.push(`/search?query=${encodeURIComponent(trimmed)}&page=1`)
      setSearchTerm('')
    }
  }

  return (
    <Box sx={{ flexGrow: 1, top: 0, zIndex: 10 }} position="sticky">
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Link href="/">
              <IconButton size="large" edge="start" aria-label="open drawer">
                <HomeFilledIcon />
              </IconButton>
            </Link>
            <form onSubmit={handleSubmit}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for your favourite movie"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleChange}
                  value={searchTerm}
                />
              </Search>
            </form>
            <Typography variant="h4" color="#256FE7">
              NapFlix
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
