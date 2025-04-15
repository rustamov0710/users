import React from 'react'

interface TodoType {
  userId: number
  id: number
  title: string
  completed: boolean
}

const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!res.ok) throw new Error('Failed to fetch todos')

  const todos: TodoType[] = await res.json()

  const userTodos = todos.filter(todo => todo.userId === Number(params.id))

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 ">✅ Todos from User #{params.id}</h1>
      <div className="flex flex-col w-full gap-6">
        {userTodos.map((todo) => (
          <div
            key={todo.id}
            className={` rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow border ${
              todo.completed ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{todo.title}</h2>
            <p className={`text-sm text-white`}>
              {todo.completed ? 'Completed' : 'Not Completed'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
