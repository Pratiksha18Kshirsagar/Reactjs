import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const products = [
    { title: "Cabbage", isFruit: false },
    { title: "Garlic", isFruit: false },
    { title: "Apple", isFruit: true },
  ];
  
   
    const listItems = products.map((product) => (
      <li
        key={product.title}
        style={{
          color: product.isFruit ? "magenta" : "darkgreen",
        }}
      >
        {product.title}
      </li>
    ))
  

  return (
    <>
   
   <ul>{listItems}</ul>;


    </>
  )
}

export default App

