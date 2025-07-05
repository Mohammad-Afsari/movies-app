import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params

  const apiKey = process.env.OMDB_API_KEY
  const url = process.env.OMDB_URL

  const apiUrl = `${url}/?apikey=${apiKey}&i=${id}`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch movie details' },
      { status: 500 },
    )
  }
}
