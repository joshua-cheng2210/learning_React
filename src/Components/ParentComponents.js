import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponents extends Component {

  constructor(props) {
    super(props)

    this.state = {
      parentName: "Parent"
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() { // note that you're passing this.greetParent and not this.greeParent() because you're passing a reference as an input to the function and not calling it
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponents
