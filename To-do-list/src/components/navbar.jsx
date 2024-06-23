import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav className='flex justify-between  py-2 bg-yellow-300  text-pink-600'>
        <div>
            <span className='mx-8 font-bold text-xl '>iTask</span>
        </div>
        <ul className='flex gap-8 mx-8 font-semibold text-lg'>
            <li className='cursor-pointer hover:font-bold hover:text-[#32CD32]'>Home</li>
        <li className='cursor-pointer hover:font-bold hover:text-[#32CD32]'>YourTask</li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
