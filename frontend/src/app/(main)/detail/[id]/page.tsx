import { MovieDetailPage } from '@/lib/components/templates/movieDetailPage/MovieDetailPage'

type Props = {
  params: { id: string }
}

export default function DetailPage({ params }: Props) {
  return <MovieDetailPage id={params.id} />
}
