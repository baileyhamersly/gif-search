import { fetchGifs, Gif } from './lib/fetchGifs'
import GifItem from './components/GifItem'

export default async function HomePage() {
  const trending: Gif[] = await fetchGifs('trending')

  return (
    <div>
      <h2 className="title">Trending GIFs</h2>
      <div className="grid">
        {trending.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  )
}