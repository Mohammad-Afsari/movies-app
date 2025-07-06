import { OMDB_API_BASE_URL } from '@/config/config'

export type SearchResults = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export type MoviesResponse = {
  Search: SearchResults[]
  totalResults: string
  Response: string
}

export type RatingsFromSource = {
  Source: string
  Value: string
}

export type MovieDetailsResponse = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: RatingsFromSource[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export const fetchMovies = async (
  movie: string,
  page: number,
): Promise<MoviesResponse> => {
  const res = await fetch(
    `${OMDB_API_BASE_URL}/api/v1/movies?movie=${movie}&page=${page}`,
  )
  if (!res.ok) throw new Error('Failed to fetch movies')
  return res.json()
}

export const fetchMovieDetails = async (
  id: string,
): Promise<MovieDetailsResponse> => {
  const res = await fetch(`${OMDB_API_BASE_URL}/api/v1/movies/details/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch movie details')
  }

  return res.json()
}
