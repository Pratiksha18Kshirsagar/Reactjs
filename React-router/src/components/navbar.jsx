import React from 'react'
import {NavLink} from 'react-router-dom'
import "./nav.css" 

const navbar = () => {
  return (
    <div>
      <ul>
      <li><NavLink className = {(e)=>{return e.isActive?"red" : ""}} to="/">Home</NavLink></li>
      <li><NavLink className = {(e)=>{return e.isActive?"red" : ""}} to="/about">About</NavLink></li>
      <li><NavLink className = {(e)=>{return e.isActive?"red" : ""}} to="/login">Login</NavLink></li>
      <li><NavLink className = {(e)=>{return e.isActive?"red" : ""}} to="/user">User</NavLink></li>
      </ul>
    </div>
  )
}

export default navbar
