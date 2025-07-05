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

export const fetchMovies = async (
  movie: string,
  page: number,
): Promise<MoviesResponse> => {
  const res = await fetch(`/api/movies?movie=${movie}&page=${page}`)
  if (!res.ok) throw new Error('Failed to fetch movies')
  return res.json()
}

// TODO: types
export const fetchMovieDetail = async (id: string) => {
  const res = await fetch(`/api/movies/${id}`)
  const data = await res.json()
  return data
}
