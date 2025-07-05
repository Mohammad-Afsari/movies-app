import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const movie = searchParams.get('movie') || ''
  const page = searchParams.get('page') || '1'

  const apiKey = process.env.OMDB_API_KEY
  const url = process.env.OMDB_URL

  const apiUrl = `${url}/?apikey=${apiKey}&s=${movie}&page=${page}`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
