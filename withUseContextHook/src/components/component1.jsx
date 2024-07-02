import React,{useContext} from 'react'
import { counterContext } from '../context/context'




const component1 = () => {
  const value = useContext(counterContext)
  console.log(value)
  return (
    <div>
      {value.count}
  
    </div>

  )
}

export default component1
