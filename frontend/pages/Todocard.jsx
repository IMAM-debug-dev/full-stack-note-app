
import React from 'react'

const TodoCard = ({ title, description, onDelete }) => {
  return (
    <div className="w-full max-w-md bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 border border-gray-200 mt-5 transition-all duration-300 hover:-translate-y-1">

      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-800 break-words">
          {title}
        </h2>

        <span className="text-xs text-gray-400 font-medium">
          TODO
        </span>
      </div>

      <p className="text-gray-600 mt-4 leading-7 break-words whitespace-pre-wrap">
        {description}
      </p>

      <div className="flex justify-end mt-6">
        <button
          onClick={onDelete}
          className="border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black px-5 py-2 rounded-xl font-semibold transition-all duration-300"
        >
          Delete
        </button>
      </div>

    </div>
  )
}

export default TodoCard

