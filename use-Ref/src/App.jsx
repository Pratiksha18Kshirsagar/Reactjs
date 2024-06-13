import { useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let p = useRef();
  useEffect(() => {
    p.current.style.backgroundColor = "yellow"
    console.log("Rendering")

  }, [])
  const [todos, setodos] = useState([{
    title: "I am todo",
    desc: "I am good todo"
  },
    {
      title: "I am todo",
      desc: "I am good todo"
    },
    {
      title: "I am todo",
      desc: "I am good todo"
    }])


  const todo = (todo) => {
    return (
      <>
        <div>
          <div>{todo.title}</div>
          <div>{todo.desc}</div>
        </div>
       
      </>
    )
  }



  return (
    <>
    {todos.map((todo)=>{
return <todo todo={todo} />
    })}
      <p>{count}</p>
      <div>
        <button ref={p} onClick={() => {
          setCount(count + 1)
        }}>click</button>
      </div>
    </>
  )
}

export default App
