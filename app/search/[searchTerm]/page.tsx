import { fetchGifs, Gif } from "@/app/lib/fetchGifs";
import GifItem from "@/app/components/GifItem";

interface SearchPageProps {
  params: { searchTerm: string };
}

export default async function SearchPage({ params }: SearchPageProps) {
  let gifs: Gif[] = [];
  try {
    gifs = await fetchGifs(params.searchTerm);
  } catch (err: any) {
    console.error("Error loading gifs:", err);
    // You can render a fallback UI if needed
    return (
      <div>
        <h2>Error loading search results</h2>
        <p>{err.message}</p>
      </div>
    );
  }
  return (
    <div>
      {gifs.length > 0 ? (
        <div>
          <h2 className="title">
            Results for: {decodeURIComponent(params.searchTerm)}
          </h2>
          <div className="grid">
            {gifs.map((gif) => (
              <GifItem key={gif.id} gif={gif} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="title">
            No Results Found for: {decodeURIComponent(params.searchTerm)}
          </h2>
        </div>
      )}
    </div>
  );
}
