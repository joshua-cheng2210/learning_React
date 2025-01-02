import React from 'react'

function ChildComponent(props) {
  return ( // note that you're passing greetHandler() and not greetHandler because you're calling the function and not passing it to somewhere else
    <div>
      <button onClick={() => props.greetHandler("jhsc")}>Greeting Parent!!</button>
    </div>
  )
}

export default ChildComponent
