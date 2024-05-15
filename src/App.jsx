import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Conponents/Navbar'
import Home from './Conponents/Home'
import Register from './Conponents/Register'
import Show from './Conponents/Show'

const App = () => {
  return (
    <div className='w-full h-screen text-sm'>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/register' Component={Register}/>
        <Route path='/show' Component={Show}/>
      </Routes>
    </div>
  )
}

export default App
