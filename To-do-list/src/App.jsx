import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {

  // input--empty--string
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [ShowFinished, setShowFinished] = useState(true)


  const toggleFinished = (params) => {
    setShowFinished(!ShowFinished)
  }


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, [])


  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handelEdit = (id) => {
    let t = todos.filter(i => i.id === id)
    console.log(t)
    settodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    settodos(newTodos)
    saveToLS()
  }

  const handelDelete = (id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    settodos(newTodos)
    saveToLS()


  }
  const handelAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    saveToLS()
  }

  const handelChange = (e) => {
    settodo(e.target.value)
  }

  const handelCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item) => {
      return item.id == id
    })
    let newTodos = [...todos] //clone of todos , because in react we cannot change the state.

    newTodos[index].isCompleted = !newTodos[index].isCompleted
    settodos(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className='container max-lg:w-[90vw]  my-5 bg-yellow-100 rounded-xl p-5 min-h-[70vh] w-1/2 mx-auto '>
     
     
          <div className="addTodo ">
          <h1 className='font-bold text-center text-xl text-pink-700 font-mono '>iTask - Manage your todos at one place </h1>
          
            {/* <h2 className='text-lg font-bold text-pink-700'>Add a Todo</h2> */}
            <div className='flex flex-col gap-5 items-center'>

            <input className=' mt-8 focus:border-pink-500 rounded-full w-[460px] max-lg:w-[85vw]' onChange={handelChange} value={todo} type="text" />
            <button className='bg-pink-500 text-white rounded-md p-3 py-1 w-[80px] hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold' disabled={todo.length <= 3} onClick={handelAdd}>Add</button>
            </div>
          </div>

          <input onChange={toggleFinished} type="checkbox" checked={ShowFinished} /> Show Finished
          <p className='text-lg font-semibold  text-pink-600 underline text-center' >Your Todos</p>

          {todos.length === 0 && <div>No todos To Display</div>}

          {todos.map((item) => {
            return (ShowFinished || !item.isCompleted) && <div className="todos flex flex-col items-center" key={item.id}>
              <div className='todo flex my-4 w-3/4 justify-between'>
                <div className="flex gap-5 items-center">
                  <input onChange={handelCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} />
                  <div className='{item.isCompleted ? "line-through" : ""}  max-w-[50vw] min-h-[10px]' >
                    {item.todo} 
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button className='text-xl text-pink-700 rounded-md p-3 py-1 mx-4 hover:text-[#8BBE1C] hover:font-semibold' onClick={() => { handelEdit(item.id) }}> <FaRegEdit /></button>
                  <button className=' text-xl text-pink-700 rounded-md p-3 py-1 mx-4  hover:text-[#8BBE1C] hover:font-semibold' onClick={() => { handelDelete(item.id) }}><MdDelete /></button>
                </div>
              </div>
            </div>
          })}


        </div>
      
    </>
  )
}

export default App
