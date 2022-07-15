import React from 'react'
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/HomePage"
import ChuckPage from './pages/ChuckPage'
import ResgiterPage from './pages/ResgiterPage'
import LoginPage from './pages/LoginPage'
import MessagesPage from './pages/MessagesPage'
import MessagesDeletePage from './pages/MessagesDeletePage'
import MessagesEditPage from './pages/MessagesEditPage'
import Default from './layouts/Default'
import Auth from './layouts/Auth'

const App = () => {
  return (<>
      <Routes>
        <Route path="/" element={<Default><Home /></Default>} />
        <Route path="/chuck" element={<Default><ChuckPage /></Default>} />
        <Route path="/messages" element={<Default><MessagesPage /></Default>} />
        <Route path="/messages/:messageId/delete" element={<Default><MessagesDeletePage /></Default>} />
        <Route path="/messages/:messageId/edit" element={<Default><MessagesEditPage /></Default>} />
        <Route path="/register" element={<Auth><ResgiterPage /></Auth>} />
        <Route path="/login" element={<Auth><LoginPage /></Auth>} />
      </Routes>
  </>)
}

export default App