import React, { useState } from 'react'
import { Trash } from 'lucide-react'

const App = () => {

  const [input, setinput] = useState('')
  const [textarea, settextarea] = useState('')
  const [task, settask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({ input,textarea })
    
    settask(copyTask)

    setinput('')
    settextarea('')
  }

  const deleteNote = (id) => {
    const copyTask = [...task]
    copyTask.splice(id, 1)
    
    settask(copyTask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        className="flex items-start p-10 w-1/2"
        onSubmit={(e) => {
          submithandler(e);
        }}
      >
        <div className="flex w-full items-start flex-col gap-4">
          <h1 className="text-4xl font-bold">Add Note</h1>
          <input
            className="px-5 w-full py-2 border-2 rounded outline-none font-medium"
            type="text"
            placeholder="Enter Note Heading"
            value={input}
            onChange={(elem) => {
              setinput(elem.target.value);
            }}
          />
          <textarea
            className="px-5 w-full h-32 py-2 border-2 rounded outline-none font-medium"
            type="text"
            placeholder="Write Details"
            value={textarea}
            onChange={(elem) => {
              settextarea(elem.target.value);
            }}
          />
          <button className="bg-white w-full text-black px-2 py-2 rounded font-medium active:bg-gray-500 active:scale-95 hover:bg-gray-400">
            Add Note
          </button>
        </div>
      </form>
      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto">
          {task.map(function (elem,idx) {
            return (
              <div
                className="relative h-52 w-40 rounded-xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black py-6 px-4 flex items-start flex-col"
                key={idx}
              >
                <h3 className="leading-tight text-xl font-bold border-b-2">
                  {elem.input}
                </h3>
                <p className="leading-tight font-medium mt-4 text-gray-800">
                  {elem.textarea}
                </p>
                <button onClick={() => {
                  deleteNote(idx)
                }}>
                  <h2 className="absolute bottom-0.5 right-1.5 p-1 rounded-full text-xs bg-cover cursor-pointer active:scale-110">
                    <Trash color="red" size="15" />
                  </h2>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App