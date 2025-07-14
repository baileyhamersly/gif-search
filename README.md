# Gif Search App

A web app that lets users search for Gifs using Giphy API's.

---

## Features

- Search for GIFs by keyword (`/search/{term}`)
- View trending GIFs and 3 random GIFs by default on homepage
- Hover to copy GIF URL to clipboard

---

## Tech Stack

- Next.js 14+ App Router  
- React
- TypeScript  
- Vanilla CSS  
- Giphy API

---

Hosted on baileygocode.com

## Testing Errors
- Trigger a 429 by reloading homepage and/or searching terms over 100 times in an hour
- Trigger a 414 by putting more than 50 characters in search term


## Project Structure
/app
  /components
    GifItem.tsx
    SearchBar.tsx
  /lib
    fetchGifs.ts         ← All API fetch logic lives here
  /search/[searchTerm]
    page.tsx             ← Dynamic route for search results
  layout.tsx             ← Shared layout
  page.tsx               ← Homepage (trending + random)
  globals.css

## Future Improvements
- Add a re-roll for the 3 random gifs
- Loading skeleton
- Handling error state in context
- Add infinite scrolling or pagination