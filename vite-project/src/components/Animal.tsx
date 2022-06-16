import React from 'react'

const Animal = () => {
    let animals:string[] = ["Lion", "Tiger", "Cat"]

  return (<>
    <div>My Animal List</div>
    <ul>
        { animals.map((animal, index) => 
            <li key={`animals-${index}`}>{ animal }</li>
        )}
    </ul>
  </>)
}

export default Animal