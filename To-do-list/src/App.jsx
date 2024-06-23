import { useState } from 'react'
import Navbar from './components/navbar'

function App() {


  return (
    <>
      <Navbar />
      <div className='container  my-5 bg-yellow-100 rounded-xl p-5 min-h-[70vh] min-w-10'>
        <div className="addTodo">
          <h2 className='text-lg font-bold text-pink-700'>Add a Todo</h2>
          <input type="text" />
          <button className='bg-pink-500 text-white rounded-md p-3 py-1 mx-4 hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold'>Add</button>
        </div>


        <p className='text-lg font-bold text-pink-700' >Your Todos</p>


        <div className="todos">
          <div className='todo flex'>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="buttons">
              <button className='bg-pink-500 text-white rounded-md p-3 py-1 mx-4 hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold'>Edit</button>
              <button className='bg-pink-500 text-white rounded-md p-3 py-1 mx-4 hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
