import React from 'react'
import Animal from './components/Animal'

import Greetings from './components/Greetings'

const App = () => {
  const age:number = 10

  return (<>
    <div>App</div>
    <Greetings firstname="Kim" age={age} />
    <Animal />
  </>)
}

export default App