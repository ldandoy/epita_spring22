import React from 'react'
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/HomePage"
import ChuckPage from './pages/ChuckPage'
import ResgiterPage from './pages/ResgiterPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (<>
    <div id="nav">
      <Link to='/'>Home</Link>
      <Link to='/chuck'>Chuck</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chuck" element={<ChuckPage />} />
        <Route path="/register" element={<ResgiterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  </>)
}

export default App