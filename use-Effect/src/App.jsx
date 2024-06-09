import { useState ,useEffect } from 'react'
import Navbar from "./components/navbar"
import './App.css'

function App() {
  const [count, setCount] = useState(2)
useEffect(() => {
 alert("count was changed!!");
}, [count])

  return (
    <>
     <Navbar/>
    <p>The count is {count}🐷</p>
     <div>
      <button onClick={()=>{
        setCount(count**2)
      }}>click</button>
     </div>


    
    </>
  )
}

export default App
