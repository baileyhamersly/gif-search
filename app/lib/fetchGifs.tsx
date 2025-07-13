export interface Gif {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
    original: {
      mp4: string;
    };
  };
}

const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY;

if (!API_KEY) throw new Error("Missing Giphy API key");

export async function fetchGifs(term: string): Promise<Gif[]> {
  const endpoint =
    term === "trending"
      ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=24`
      : `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${API_KEY}&limit=24`;
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(`Giphy API Issue: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  if (!data || !Array.isArray(data.data)) {
    throw new Error("Invalid response format from Giphy");
  }

  return data.data;
}

// Helper to fetch a single random gif
async function fetchRandomGif(): Promise<Gif> {
  //Adding a random seed to force unique randomly selected gifs
  const randomSeed = `${Date.now()}-${Math.random().toString(36).substring(2)}`;
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&random_id=${randomSeed}`,
    // disable fetch caching so that once deployed the gifs are differnt on every homepage render
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`Random API failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.data;
}

export async function fetchMultipleRandomGifs(count: number): Promise<Gif[]> {
  const results = await Promise.all(
    Array.from({ length: count }, () => fetchRandomGif())
  );
  return results;
}
