import React from 'react'
import { useEffect } from 'react'

const navbar = () => {
    // case 1 = On every render , for every change the alert pops out
    useEffect(() => {
        alert("I am useEffect on every change  function")
    },)

    // case 2 = On first render , the alert pops out only ones 
    useEffect(() => {
        alert("I am useEffect  only first time function")
    }, [])


    // case 3 = when value changes  , for every value  change the alert pops out
    // useEffect(() => {
    //     alert("Colour changed")
    // }, [])
    return (
        <div>
            <p>I am a Navbar , I am In colour </p>
        </div>
    )
}

export default navbar
