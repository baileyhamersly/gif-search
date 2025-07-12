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
  const API_KEY = process.env.GIPHY_API_KEY;
  if (!API_KEY) throw new Error("Missing Giphy API key");

  const endpoint =
    term === "trending"
      ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=24`
      : `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
          term
        )}&api_key=${API_KEY}&limit=24`;

  const res = await fetch(endpoint);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Giphy API failed: ${res.status} ${body}`);
  }

  const json = await res.json();
  return json.data;
}
