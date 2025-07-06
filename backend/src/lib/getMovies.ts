import { Request, RequestHandler, Response } from 'express'
import { OMDB_API_KEY, OMDB_API_URL } from '../config'

export const getMoviesHandler: RequestHandler = async (
  req: Request,
  res: Response,
) => {
  const { movie, page = '1' } = req.query

  if (!movie || typeof movie !== 'string') {
    return res
      .status(400)
      .json({ error: 'Missing or invalid "movie" query param' })
  }

  try {
    const response = await fetch(
      `${OMDB_API_URL}/?apikey=${OMDB_API_KEY}&s=${movie}&page=${page}`,
    )

    const data = await response.json()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies...' })
  }
}
