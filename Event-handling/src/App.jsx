import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [naam, setvalue] = useState("Mona")
  const [form, setForm] = useState({ email: "", phone: "" })

  const handleClick = () => {
    alert(" I am Onclick wala!! ")
  }


  const mouse = () => {
    alert("I am mouse wala!!")
  }

  const handelChange = (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    setvalue(e.target.value)

  }

  const handelChangeUltra = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // console.log(form.email)
    // console.log(form.phone)
  }

  return (
    <>
      <div className='container'>
        <button onClick={handleClick}>ClickMe</button>
        <div className='Mouse' onMouseOver={mouse}>
          Mouse-Man
        </div>

        {/* This is used only for single variable */}
        <input type="text" value={naam} onChange={handelChange} /> </div>

      {/* This is for object */}
      <input type="text" name='email' value={form.email} onChange={handelChangeUltra} />
      <input type="text"  name='phone' value={form.phone} onChange={handelChangeUltra} />


    </>
  )
}

export default App
