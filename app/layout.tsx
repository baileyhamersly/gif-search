import './globals.css'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Gif Search',
  description: 'Search for GIFs using Giphy API',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
