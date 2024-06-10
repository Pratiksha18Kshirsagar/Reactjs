import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>click me</button>

    </>
  )
}

export default App
