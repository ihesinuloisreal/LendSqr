import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Dashboard } from './Pages/Dashboard'
import { NavBar } from './Components/NavBar'


function App() {
  return (
    <>
      <NavBar/>
      <div className="">
      {/* <button className="btn btn-primary">Click me</button> */}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
    </>
    
  )
}

export default App
