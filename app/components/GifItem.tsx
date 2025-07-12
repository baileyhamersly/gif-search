"use client";

interface GifItemProps {
  gif: {
    id: string;
    title: string;
    images: {
      downsized_medium: {
        url: string;
      };
    };
  };
}

export default function GifItem({ gif }: GifItemProps) {
  return (
    <div className="gif-item">
      <img
        src={gif.images.downsized_medium.url}
        alt={gif.title}
        className="gif-img"
      />
    </div>
  );
}
