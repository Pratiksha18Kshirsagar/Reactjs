import { useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let p = useRef();
  useEffect(() => {
    p.current.style.backgroundColor = "green"
    console.log("Rendering")

  }, [])

  return (
    <>
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
