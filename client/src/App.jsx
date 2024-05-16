import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import Home from './Components/pages/Home'

const App = () => {
  return (
   <>
   <Routes>
   {/* <Route path="/" element={<Home />} /> */}
   <Route path="/" element={<Login />} />
   <Route path="/register" element={<Register />} />
   <Route path="/home" element={<Home />} />

   </Routes>
   </>
  )
}

export default App
