//class component design
import React, {Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : 'From Message, Welcome {this.props.firstName} {this.props.lastName} ',
            temp_message : "Thank you for watching!!"
        }
    }
    render() { return (
        <div>
            <h1> 
                {this.state.message}
                {this.props.children}
            </h1>
            <button onClick={() => this.changeMessage()}>subscribe</button>
        </div>
    );}

    changeMessage(){
        let temp = this.state.message
        this.setState({
            message : this.state.temp_message,
            temp_message : temp
        })
    }
}

export default Message;

// this is class component designed to display a simple message (this message is not actualy HTML but in JSX)
// key important featurres:
// - more feature rich
// - provide lifecycle hooks
// - complex UI logic