import { fetchGifs, Gif } from '@/app/lib/fetchGifs'
import GifItem from '@/app/components/GifItem'

interface SearchPageProps {
  params: { searchTerm: string }
}

export default async function SearchPage({ params }: SearchPageProps) {
  const gifs: Gif[] = await fetchGifs(params.searchTerm)

  return (
    <div>
      <h2 className="title">Results for: {params.searchTerm}</h2>
      <div className="grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  )
}
