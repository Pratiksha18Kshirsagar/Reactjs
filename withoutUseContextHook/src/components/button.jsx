import React from 'react'
import Component1 from './component1'

const button = ({count}) => {
  return (
    <div>
      <button><span><Component1 count = {count}/></span>I am button</button>
    </div>
  )
}

export default button
