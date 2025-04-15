
import Link from 'next/link'
import React from 'react'

const page = async () => {
  interface AlbumType {
    userId: number
    id: number
    title: string
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  if (!res.ok) throw new Error('Failed to fetch albums')

  const albums: AlbumType[] = await res.json()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {albums.map((album) => (
        <Link
          key={album.id}
          href={`albums/${album.id}`}
          className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-200"
        >
          <h2 className="text-lg font-semibold mb-2">
            🎵 Album #{album.id}
          </h2>
          <p className="text-gray-800 mb-1">
            {album.title.charAt(0).toUpperCase() + album.title.slice(1)}
          </p>
          <p className="text-sm text-gray-500">User ID: {album.userId}</p>
        </Link>
      ))}
    </div>
  )
}

export default page
