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
      original: {
        mp4: string;
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
      <video
        src={gif.images.original.mp4}
        autoPlay
        loop
        muted
        playsInline
        className="gif-video"
        aria-label={gif.title}
      />
      {copied && <span className="copied-tooltip">Copied!</span>}
      <button className="copy-btn" onClick={handleCopy}>
        📋
      </button>
    </div>
  );
}
