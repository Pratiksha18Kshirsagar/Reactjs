import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[showBtn,setshowBtn] = useState(false)

  return (
    <>
    {/* ternary operator */}
     {/* {showBtn?<button>ShowBtn is true!!</button>:<button>ShowBtn is false!!</button>} */}

     {/* react syntax for conditional rendering  that handels only true*/}
     {showBtn && <button>ShowBtn is true!!</button>}
      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
          Toggle-Btn
        </button>
      
      </div>
      
    </>
  )
}

export default App
