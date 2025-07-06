import { MovieDetailPage } from '@/lib/components/templates/movieDetailPage/MovieDetailPage'

type Props = {
  params: { id: string }
}

export default async function DetailPage({ params }: Props) {
  const { id } = await params

  return <MovieDetailPage id={id} />
}
