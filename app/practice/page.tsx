'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Count:', count)
  }, [count])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-blue-600">
        useState & useEffect Practice
      </h1>

      <h2 className="text-2xl">
        Count: {count}
      </h2>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-700"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-900"
        >
          Reset
        </button>
      </div>
    </div>
  )
}