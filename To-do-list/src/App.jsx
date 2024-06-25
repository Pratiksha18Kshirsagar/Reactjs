import { useState } from 'react'
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  // input--empty--string
  const [todo, settodo] = useState("")

  const [todos, settodos] = useState([])

  const handelEdit = () => {

  }

  const handelDelete = () => {

  }
  const handelAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")

  }

  const handelChange = (e) => {
    settodo(e.target.value)
  }

  const handelCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item)=>{
      return item.id == id
    })
    let newTodos = todos
    
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
          <button className='bg-pink-500 text-white rounded-md p-3 py-1 mx-4 hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold' onClick={handelAdd}>Add</button>
        </div>


        <p className='text-lg font-bold text-pink-700' >Your Todos</p>

        {todos.map((item) => {


          return <div className="todos  " key={item.id}>
            <div className='todo flex my-4 w-1/4 justify-between'>
              <input onChange={handelCheckbox} type="checkbox" value={item.isCompleted} name={item.id} />
              <div className={item.isCompleted ? "line-through" : ""}>
                {item.todo}
              </div>
              <div className="buttons">
                <button className='bg-pink-500 text-white rounded-md p-3 py-1 mx-4 hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold' onClick={handelEdit}>Edit</button>
                <button className='bg-pink-500 text-white rounded-md p-3 py-1 mx-4 hover:bg-[#ADF802] hover:text-pink-600 hover:font-semibold' onClick={handelDelete}>Delete</button>
              </div>
            </div>
          </div>
        })}


      </div>
    </>
  )
}

export default App
