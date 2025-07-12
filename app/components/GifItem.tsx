"use client";
import { useState } from "react";

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
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      //Add url to clipboard and display "Copied" toast message for 1.5 seconds
      await navigator.clipboard.writeText(gif.images.downsized_medium.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy GIF URL:", err);
    }
  };

  return (
    <div className="gif-wrapper">
      <img src={gif.images.downsized_medium.url} alt={gif.title} />
      {copied && <span className="copied-tooltip">Copied!</span>}
      <button className="copy-btn" onClick={handleCopy}>
        📋
      </button>
    </div>
  );
}
