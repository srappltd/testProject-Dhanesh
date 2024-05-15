import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[8vh] bg-zinc-100 flex items-center justify-end gap-4 px-10'>
        <Link to={'/'} className='text-sm font-medium'>Home</Link>
        <Link to={'/register'} className='text-sm font-medium'>Register</Link>
        <Link to={'/show'} className='text-sm font-medium'>Show</Link>
    </div>
  )
}

export default Navbar
