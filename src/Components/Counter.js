import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
    }

    render() { // if you want to change anything from the state, you need to use setState and not this.state.count += 1
        return (
        <div>
            <div>count : {this.state.count}</div>
            <button onClick={() => 
                this.setState(
                    // {count : this.state.count + 1}, // this is not a safely threaded fucntion. if there are multiple of this line of code running at the same time, it might not be able to increment the value properly
                    (prevState) => ({ count: prevState.count + 1 }),
                    () => {console.log('Callback count ', this.state.count) } 
                )
                }>Increment</button>
        </div>
        )
    }

    // render() { // if you want to change anything from the state, you need to use setState and not this.state.count += 1
    //     return (
    //     <div>
    //         <div>count : {this.state.count}</div>
    //         <button onClick={() => {
    //             this.setState(
    //                 {count : this.state.count + 1},
    //             )
    //             console.log('Callback count ', this.state.count) // this console.log might print out value before the increment since the setstate is a async function. so console.log might be processed first befroe the increment
    //         }
    //             }>Increment</button>
    //     </div>
    //     )
    // }
}

export default Counter
