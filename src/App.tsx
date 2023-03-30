import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login'
import { NavBar } from './Components/NavBar'


function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
      {/* <button className="btn btn-primary">Click me</button> */}
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
    </>
    
  )
}

export default App
