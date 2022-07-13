import React, {FC, ReactNode, useContext, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import { AuthContext } from '../contexts/Auth'
import { getMe } from '../services/auth'

const Default: FC<{ children: ReactNode }> = ({ children }) => {
  const context = useContext(AuthContext)
  let navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const res = await getMe()
    
      if (context.isAuth == false && res === null) {
        context.updateAuth(false)
        navigate('/login')
      }
    }

    getData()
  }, [])

  return (<>
    <div id="nav">
      <Link to='/'>Home</Link>
      <Link to='/chuck'>Chuck</Link>
      <Link to='/message'>Messages</Link>
      { context.isAuth && <Link to="/register">Register</Link> }
      { context.isAuth && <Link to="/login">Login</Link> }
      { !context.isAuth && <Link to="/logout">Logout</Link> }
    </div>
    
    <div className='container'>
        {children}
    </div>
    </>)
}

export default Default