import Link from 'next/link'
import React from 'react'

interface PostType {
  userId: number
  id: number
  title: string
  body: string
}

const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')

  const posts: PostType[] = await res.json()

  const userPosts = posts.filter(post => post.userId === Number(params.id))
console.log(userPosts)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 ">📝 Posts from User #{params.id}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userPosts.map((post) => (
          <Link href={`posts/${post.id}`}
            key={post.id}
            className="bg-white border rounded-2xl p-4 shadow hover:shadow-xl transition-shadow border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-blue-600 mb-2">{post.title}</h2>
            <p className="text-gray-700 text-sm">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page
