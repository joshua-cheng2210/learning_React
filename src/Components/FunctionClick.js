import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("button clicked")
    }

  return (
    <div>
        {/* <p>testing functional click</p> */}
        <button onClick={clickHandler} >Click</button> {/* note that the function is not called with () because you're passing the function and not callingteh function (there is a difference) */}
    </div>
  )
}

export default FunctionClick
