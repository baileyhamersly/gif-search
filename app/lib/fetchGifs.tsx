export interface Gif {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

export async function fetchGifs(term: string): Promise<Gif[]> {
  const endpoint =
    term === "trending"
      ? `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=24`
      : `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
          term
        )}&api_key=${process.env.GIPHY_API_KEY}&limit=24`;

  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Failed to fetch GIFs");
  const json = await res.json();
  return json.data;
}
