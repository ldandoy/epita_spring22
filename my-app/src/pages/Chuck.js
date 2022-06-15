import React, {useEffect, useState} from 'react'

const Chuck = () => {
    const [joke, setJoke] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://api.chucknorris.io/jokes/random')
            const responseJson = await res.json()
            setJoke(responseJson.value)
        }

        getData()
    }, [])

  return (
    <div>{ joke }</div>
  )
}

export default Chuck

