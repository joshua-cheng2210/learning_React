import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            message : 'Hello! speaking from EventBind.js'
      }

    //   option 4: binding in the constructor (best solution) 
    //   +: some optimizations: as it binds the method in the constructor and not in the render method
    //   this.clickHandler = this.clickHandler.bind(this); // this will bind the clickHandler method to the class
    }
    // clickHandler() {
    //     this.setState({
    //         message : "goodbye!"
    //     })
    //     // console.log(this)
    // }
    //option 5: arrow function as class property
    clickHandler = () => {
        this.setState({
            message : "goodbye!"
        })
    }

    // option 1
    // this button onclick will break the code because it will be called immediately. after compilation, "this" will be referred to the window and not the class
    // render() {
    //     return (
    //     <div>
    //         <div>{this.state.message}</div>
    //         <button onClick={this.clickHandler()}> click me! This is from EventBind.js! </button> 
    //     </div>
    //     )
    // }
    
    // option 2: binding in the render method (solution to option 1)
    // using the .bind() to provide the context of the class to the clickHandler method. 
    // +: solves the problem of option 1
    // -: performance issues because every time the render method is called, a new function is created
    // render() {
    //     return (
    //     <div>
    //         <div>{this.state.message}</div>
    //         <button onClick={this.clickHandler.bind(this)}> click me! This is from EventBind.js! </button> 
    //     </div>
    //     )
    // }

    // option 3: class property as arrow function (best solution)
    // +: using arrow function, the class property will be bound to the class itself.
    // -: not supported in older browsers
    // render() {
    //     return (
    //     <div>
    //         <div>{this.state.message}</div>
    //         <button onClick={() => this.clickHandler()}> click me! This is from EventBind.js! </button>
    //     </div>
    //     )
    // }

    // option 4: binding in the constructor (best solution) and option 5: arrow function as class property
    render() {
        return (
        <div>
            <div>{this.state.message}</div>
            <button onClick={this.clickHandler}> click me! This is from EventBind.js! </button>
        </div>
        )
    }
    // note that it is onClick={this.clickHandler} and not onClick={this.clickHandler()} because you are passing the function reference and not calling the function
}

export default EventBind

// summary: 
// option 1: this will break the code because it will be called immediately. after compilation, "this" will be referred to the window and not the class
// option 2: using the .bind() to provide the context of the class to the clickHandler method. +: solves the problem of option 1 -: performance issues because every time the render method is called, a new function is created
// option 3: using arrow function, the class property will be bound to the class itself. +: using arrow function, the class property will be bound to the class itself. -: not supported in older browsers
// option 4: binding in the constructor (best solution) +: some optimizations: as it binds the method in the constructor and not in the render method
// option 5: arrow function as class property +: using arrow function, the class property will be bound to the class itself. -: not supported in older browsers
// option 4 and 5 are the best solutions for binding methods in react. option 4 is the best solution for binding methods in react. option 5 is the best solution for binding methods in react. option 4 is