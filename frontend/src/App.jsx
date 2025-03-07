import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div className='bg-bgPrimary min-h-screen flex flex-col'>
    <Navbar/>

      <div className='flex-grow'>
        <Outlet />
      </div>

      <foooter className="mt-auto">Footer</foooter>
    </div>
    </>
  )
}

export default App