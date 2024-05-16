import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[8vh] bg-zinc-100 flex items-center justify-between gap-4 px-10'>
      <div className='flex font-bold text-xl'>
        Scatch
      </div>
      <div className='flex items-center justify-end gap-4'>
        <Link to={'/'} className='text-sm font-medium'>Home</Link>
        <Link to={'/register'} className='text-sm font-medium'>Register</Link>
        <Link to={'/show'} className='text-sm font-medium'>Show</Link>
      </div>
    </div>
  )
}

export default Navbar
