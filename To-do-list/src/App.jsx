import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  // input--empty--string
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [ShowFinished , setShowFinished] = useState(true)

  
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
      <div className='container  my-5 bg-yellow-100 rounded-xl p-5 min-h-[70vh] min-w-10'>
        <div className="addTodo">
          <h2 className='text-lg font-bold text-pink-700'>Add a Todo</h2>
          <input className='w-1/2' onChange={handelChange} value={todo} type="text" />
          <button className='bg-pink-500 text-white rounded-md p-3 py-1 mx-4 hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold' disabled ={todo.length <=3 } onClick={handelAdd}>Add</button>
        </div>

<input onChange={toggleFinished} type="checkbox" checked={ShowFinished} /> Show Finished
        <p className='text-lg font-bold text-pink-700' >Your Todos</p>

        {todos.length === 0 && <div>No todos To Display</div>}

        {todos.map((item) => {
          return  (ShowFinished || !item.isCompleted) && <div className="todos  " key={item.id}>
            <div className='todo flex my-4 w-1/4 justify-between'>
              <div className="flex gap-5 items-center">
                <input onChange={handelCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons flex h-full">
                <button className='bg-pink-500 text-white rounded-md p-3 py-1 mx-4 hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold' onClick={() => { handelEdit(item.id) }}>Edit</button>
                <button className='bg-pink-500 text-white rounded-md p-3 py-1 mx-4 hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold' onClick={() => { handelDelete(item.id) }}>Delete</button>
              </div>
            </div>
          </div>
        })}


      </div>
    </>
  )
}

export default App
