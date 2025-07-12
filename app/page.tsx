'use client'
import { useState } from 'react'
import './globals.css'

export default function HomePage() {
  const [query, setQuery] = useState<string>('')
  const [search, setSearch] = useState<string>('trending')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearch(query)
  }

  return (
    <main className="container">
      <h1 className="title">Giphy Clone</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for GIFs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <div>The current search is : {search}
        </div>
      </form>
    </main>
  )
}
