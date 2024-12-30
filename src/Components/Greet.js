// functional components using props
import React from 'react'

// function Greet() {
//     return <h1>Hello Joshua Cheng</h1>
// }

const Greet = (props) => {
    // also note that props is an argument that cannot be changed throughout the whole function
    console.log(props);
    return (
        <div>
            <h1> Hello {props.firstName} {props.lastName}.</h1> 
            {props.children} 
        </div>
    )
}
export default Greet;

// this program has a functional components designed to display a simple message
// key important features:
// - absence of the "this" keyword
// - a solution without using state
// - normally used for returning UI
// - very hard to debug since there is no "this"