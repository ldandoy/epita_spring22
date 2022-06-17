import React from 'react'
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/HomePage"
import ChuckPage from './pages/ChuckPage'

const App = () => {
  return (<>
    <div id="nav">
      <Link to='/'>Home</Link>
      <Link to='/chuck'>Chuck</Link>
    </div>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chuck" element={<ChuckPage />} />
      </Routes>
    </div>
  </>)
}

export default App