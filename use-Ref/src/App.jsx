import { useState, useEffect, useRef } from 'react'

import './App.css'



//useref is used to persist the values when we are rendering and no need to use dom .
function App() {
  const [count, setCount] = useState(0)
  let a = useRef(0);
  let p = useRef();
  useEffect(() => {
    p.current.style.backgroundColor = "yellow"
    console.log("Rendering")

  }, [])

  useEffect(() => {
    a.current = a.current + 1;
    alert("value of a is Persisted")
    console.log(a.current)


  })



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


  const Todo = (prop) => {
    return (
      <>
        <div>
          <div>{prop.title}</div>
          <div>{prop.desc}</div>
        </div>

      </>
    )
  }



  return (
    <>
      {todos.map((todo) => {
        return <Todo prop={todo} />
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
