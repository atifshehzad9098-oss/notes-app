import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)
    
    setTitle('')
    setDetails('')
  }
  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='main h-screen m-3 text-white flex gap-5 flex-col lg:flex-row lg:flex-nowrap lg:justify-between'>
      <form action="" className="lg:w-1/3" onSubmit={(e) => {
        submitHandler(e);
      }}>

        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl font-bold'>Add Notes</h1>
          <input className='border-4 rounded' type="text" placeholder='Enter Notes Heading' value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} />
          <textarea className='border-4 rounded' type="text" placeholder='Write Details' value={details} onChange={(e) => {
            setDetails(e.target.value)
          }} />
          
          <button className='addnote active:bg-gray-300 bg-amber-100 text-black active:scale-90 rounded-lg'>Add Note</button>

        </div>

      </form>
      <div className='p-2 lg:w-2/3 lg:border-l-4 overflow-hidden'>
        <h1 className='text-2xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap p-4 gap-5 overflow-auto h-full pb-10 '>
          {task.map((elem, idx) => {
            return (
              <div key={idx} className="notes relative text-wrap border-4 border-gray-400 flex flex-col items-start h-50 w-40 text-black pt-5 pb-2 px-2 rounded-lg">
                <h1 className='text-xl font-bold leading-tight'>{elem.title}</h1>
                <p className='mt-0.5 details overflow-y-scroll overflow-x-clip  w-full  leading-tight font-medium text-gray-700'>{elem.details}</p>
                <button className='bg-red-600 absolute bottom-1.5 hover:bg-red-700 cursor-pointer active:scale-90 text-white px-10 p-1 self-center mt-auto rounded-lg' onClick={(e) => {
                  deleteNote(idx)
                }}>Delete</button>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App
