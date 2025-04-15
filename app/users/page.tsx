import Link from 'next/link'
import React from 'react'

const page = async () => {
  interface usertype {
    id: number
    name: string
    email: string
    address: {
      street: string
      suite: string
      city: string
    }
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  if (!res.ok) throw new Error('Failed to fetch')

  const users: usertype[] = await res.json()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {users.map((el) => (
        <Link
          key={el.id}
          href={`users/${el.id}`}
          className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">{el.name}</h2>
          <p className="text-gray-700 mb-1">
            📍 {el.address.street}, {el.address.suite}, {el.address.city}
          </p>
          <p className="text-gray-600">✉️ {el.email}</p>
        </Link>
      ))}
    </div>
  )
}

export default page
