import React from 'react'
import "./card.css"

const card = (props) => {
  return (
    <div className='myCard'>
      <div>
    <p>{props.title}</p>
    <p>{props.desc}</p></div>
    </div>
    
  )
}

export default card
