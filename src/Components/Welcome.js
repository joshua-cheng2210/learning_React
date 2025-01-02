//class component design
import React, {Component} from "react";

class Welcome extends Component {
    render(props) { return (
        <h1> from the class method {this.props.firstName} {this.props.lastName} 
        {this.props.children}</h1>
    );}
}

export default Welcome;

// this is class component designed to display a simple message (this message is not actualy HTML but in JSX)
// key important featurres:
// - more feature rich
// - provide lifecycle hooks
// - complex UI logic