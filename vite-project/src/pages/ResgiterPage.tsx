import {useState, ChangeEvent, FormEvent} from 'react'
import { useNavigate } from "react-router-dom"

import { User } from '../types/user'
import { register } from '../services/auth'

const ResgiterPage = () => {
    let navigate = useNavigate()
    const [form, setForm] = useState<User>({
        username: '',
        email: '',
        password: ''
    })

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value}: {name: string, value: string} = event.target 
        setForm({...form, [name]: value})
    }

    const onSubmitHandler = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (await register(form)) {
            navigate('/')
        }
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <div className="form-row">
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={form.username}
                onChange={onChangeHandler}
            />
        </div>

        <div className="form-row">
            <label>Email</label>
            <input 
                type="email"
                name="email"
                value={form.email}
                onChange={onChangeHandler}
            />
        </div>

        <div className="form-row">
            <label>Password</label>
            <input 
                type="password"
                name="password"
                value={form.password}
                onChange={onChangeHandler}
            />
        </div>

        <div className="form-row">
            <button type='submit'>Send</button>
        </div>
    </form>
  )
}

export default ResgiterPage