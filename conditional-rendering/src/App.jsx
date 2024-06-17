import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [showBtn, setshowBtn] = useState(false)
  const [office, setoffice] = useState([{ name: Kim, post: Employee }, { name: Bob, post: Watchman }, { name: Harry, post: Boss }])

  const Company = ({ office }) => {
    return (
      <div>
        <li>
          {office.name}
        </li>
        <li>
          {office.post}
        </li>
      </div>
    )
  }

  return (
    <>
      {/* ternary operator */}
      {/* {showBtn?<button>ShowBtn is true!!</button>:<button>ShowBtn is false!!</button>} */}

      {office.map((office) => {
        return <Company office={office} />
      })}








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
