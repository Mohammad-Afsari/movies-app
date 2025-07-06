// TODO: Temporary file - will need moving
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
  const res = await fetch(`/api/movies?movie=${movie}&page=${page}`)
  if (!res.ok) throw new Error('Failed to fetch movies')
  return res.json()
}

export const fetchMovieDetails = async (
  id: string,
): Promise<MovieDetailsResponse> => {
  const apiKey = process.env.OMDB_API_KEY
  const url = process.env.OMDB_URL

  console.log(apiKey, url)

  const apiUrl = `${url}/?apikey=${apiKey}&i=${id}`

  const res = await fetch(apiUrl, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch movie details')
  }

  return res.json()
}
