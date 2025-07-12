import { ReactNode } from "react";
import SearchBar from "./components/SearchBar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gif Search",
  description: "Search for GIFs using Giphy API",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <h1 className="title">Gif Search</h1>
          <SearchBar />
          {children}
        </div>
        <footer>Written by Bailey, Powered By Giphy</footer>
      </body>
    </html>
  );
}
