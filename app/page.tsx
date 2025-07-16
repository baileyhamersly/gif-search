import { fetchGifs, fetchMultipleRandomGifs, Gif } from "./lib/fetchGifs";
import GifItem from "./components/GifItem";

export default async function HomePage() {
  let trendingGifs: Gif[] = [];
  let randomGifs: Gif[] = [];

  try {
    trendingGifs = await fetchGifs("trending");
  } catch (err) {
    console.error("Error fetching trending GIFs:", err);
  }

  try {
    randomGifs = await fetchMultipleRandomGifs(3);
  } catch (err) {
    console.error("Error fetching random GIFs:", err);
  }

  return (
    <div>
      {randomGifs.length > 0 && (
        <>
          <h2 className="title random-title">Luck of the Draw</h2>
          <div className="grid random-grid-wrapper">
            {randomGifs.map((gif) => (
              <GifItem key={gif.id} gif={gif} />
            ))}
          </div>
        </>
      )}

      <h2 className="title trending-title">Trending Now</h2>
      <div className="grid">
        {trendingGifs.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
}
