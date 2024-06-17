import { useState, useEffect } from 'react'
import Navbar from './component/navbar'


import './App.css'

function App() {
  const [cards, setcards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
  }
  useEffect(() => {

    fetchData()

  }, [])


  return (
    <>


    <Navbar/>
      <div className="container" >
        {cards.map((card) => {
          return <div className="card" key={card.id}>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
          </div>

        })}</div>


    </>
  )
}

export default App
