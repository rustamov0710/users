import React from 'react'

interface PhotoType {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

const page = async ({ params }: { params: { albumId: string } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  if (!res.ok) throw new Error('Failed to fetch photos')

  const photos: PhotoType[] = await res.json()

  const newPhotos = photos.filter(photo => photo.albumId === Number(params.albumId))

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">📸 Photos from Album #{params.albumId}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newPhotos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow border"
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="rounded-md w-full h-40 object-cover mb-3"
            />
            <p className="text-gray-800 text-sm">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
