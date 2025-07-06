import { Router } from 'express'
import { getMoviesHandler } from './lib/getMovies'
import { getMovieDetailsHandler } from './lib/getMovieDetails'

const router = Router()

router.get('/api/v1/movies', getMoviesHandler)
router.get('/api/v1/movies/details/:id', getMovieDetailsHandler)

export default router
