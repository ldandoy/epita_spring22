import React from 'react'

type GreetingsParams = {
    firstname: string,
    age?: number
}

const Greetings = ( {firstname, age=5}: GreetingsParams ) => {
  return (
    <div>Hello {firstname} {(age-30)} !</div>
  )
}

export default Greetings
