
import React, { useState } from 'react'
import TodoCard from './Todocard'

const Todo = () => {
  const [popup, setPopup] = useState(false)
  const [show, setShow] = useState(false)
  const [arrey, setarrey] = useState([])

  const [Input, setInput] = useState({
    title: "",
    body: ""
  })

  const change = (e) => {
    const { name, value } = e.target

    setInput({
      ...Input,
      [name]: value
    })
  }

  const submit = (e) => {
    e.preventDefault()

    if (!Input.title.trim() || !Input.body.trim()) return

    setarrey((prev) => [...prev, Input])

    setInput({
      title: "",
      body: ""
    })

    setShow(false)
    setPopup(true)

    setTimeout(() => {
      setPopup(false)
    }, 2000)
  }

  const deleteTodo = (index) => {
    setarrey((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }

  return (
    <div className="min-h-screen w-full bg-white text-[#24251f]">

      {/* Header */}
      <div className="w-full px-6 md:px-16 py-8 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#344d2f]">
            My Todo List
          </h1>
          <p className="text-gray-500 mt-2">
            Organize your day, one task at a time.
          </p>
        </div>

        <div className="hidden sm:block bg-[#eaf1e5] text-[#42683a] px-5 py-2 rounded-full font-semibold">
          Stay Productive
        </div>
      </div>

      {/* Success Popup */}
      {popup && (
        <div className="fixed top-5 right-5 bg-[#426b37] text-white px-6 py-4 rounded-xl shadow-xl z-50 animate-slide-in">
          <h2 className="font-semibold">
            ✓ Todo Added Successfully!
          </h2>
        </div>
      )}

      {/* Form */}
      <div className="flex justify-center px-5 py-12">
        <form
          onSubmit={submit}
          className="w-full max-w-2xl bg-white border border-gray-200 rounded-3xl p-6 md:p-9 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-[#344d2f] mb-2">
            Create a New Task
          </h2>

          <p className="text-gray-500 mb-7 text-sm">
            Write down what you need to do.
          </p>

          <input
            name="title"
            value={Input.title}
            onChange={change}
            onClick={() => setShow(true)}
            className="w-full bg-[#fafbf9] border border-gray-300 focus:border-[#769b50] focus:ring-2 focus:ring-[#769b50]/20 outline-none p-4 rounded-xl text-[#24251f] placeholder:text-gray-400 transition-all"
            type="text"
            placeholder="Enter your title..."
          />

          {show && (
            <textarea
              name="body"
              value={Input.body}
              onChange={change}
              className="w-full h-36 mt-5 bg-[#fafbf9] border border-gray-300 focus:border-[#769b50] focus:ring-2 focus:ring-[#769b50]/20 outline-none rounded-xl p-4 text-[#24251f] placeholder:text-gray-400 resize-none transition-all"
              placeholder="Enter your description..."
            />
          )}

          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-[#527a43] hover:bg-[#3e6233] text-white font-bold px-8 py-3 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              + Add Task
            </button>
          </div>
        </form>
      </div>

      {/* Todo Cards */}
      <div className="px-5 md:px-12 pb-12">

        <div className="flex items-center justify-between mb-7">
          <h2 className="text-2xl font-bold text-[#344d2f]">
            My Tasks
          </h2>

          <span className="bg-[#eaf1e5] text-[#42683a] px-4 py-2 rounded-full text-sm font-semibold">
            {arrey.length} Tasks
          </span>
        </div>

        {arrey.length === 0 ? (
          <div className="text-center py-16 bg-[#fafbf9] border border-dashed border-gray-300 rounded-2xl">
            <p className="text-4xl mb-3">📝</p>
            <h3 className="text-xl font-semibold text-[#344d2f]">
              No Tasks Yet
            </h3>
            <p className="text-gray-500 mt-2">
              Add your first task to get started!
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {arrey.map((item, index) => (
              <TodoCard
                key={index}
                title={item.title}
                description={item.body}
                onDelete={() => deleteTodo(index)}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  )
}

export default Todo
