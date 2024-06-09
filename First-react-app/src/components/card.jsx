import React from 'react'
import "./card.css"


// props it is a object , what ever u pass in App.jsx comes in u r components!!
const card = (props) => {
  return (
    <div className='myCard'>
      <div>
        <img src="https://www.springboard.com/blog/wp-content/uploads/2022/09/programmng-language.jpg" alt="" width={250}  height={200}/>
    <p>{props.title}</p>
    <p>{props.desc}</p></div>
    </div>
    
  )
}

export default card
