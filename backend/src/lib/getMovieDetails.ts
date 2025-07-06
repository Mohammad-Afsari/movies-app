import { Request, RequestHandler, Response } from 'express'
import { OMDB_API_KEY, OMDB_API_URL } from '../config'

export const getMovieDetailsHandler: RequestHandler = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params

  try {
    const response = await fetch(
      `${OMDB_API_URL}/?apikey=${OMDB_API_KEY}&i=${id}`,
    )

    const data = await response.json()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movie details...' })
  }
}
