import React, {useState} from 'react'

const ResgiterPage = () => {
    const [form, setForm] = useState({
        username: '',
        email: ''
    })

    const onChangeHandler = (event:any) => {
        const {name, value} = event.target 
        setForm({...form, [name]: value})
    }

    const onSubmitHandler = (event:any) => {
        event.preventDefault()
        console.log(form)
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <input
            type="text"
            name="username"
            value={form.username}
            onChange={onChangeHandler}
        />

        <input 
            type="email"
            name="email"
            value={form.email}
            onChange={onChangeHandler}
        />
        <button type='submit'>Send</button>
    </form>
  )
}

export default ResgiterPage