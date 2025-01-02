import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
        }

        this.login = this.login.bind(this)
    }

    login () {
        this.setState((prevState) => ({isLoggedIn: !prevState.isLoggedIn}))
    }

    render() {
        // option1: using if else
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome Joshua</div>
        //             <div><button onClick={() => this.login()}>login</button></div>
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //             <div><button onClick={() => this.login()}>login</button></div>
        //         </div>
        //     )
        // }
        
        // option2: using element variables
        // return this.state.isLoggedIn ? (
        //     <div>
        //         <div>Welcome Joshua</div>
        //         <div><button onClick={() => this.login()}>login</button></div>
        //     </div>
        // ) : (
        //     <div>
        //         <div>Welcome Guest</div>
        //         <div><button onClick={() => this.login()}>login</button></div>
        //     </div>
        // )

        // option3: using ternary operator
        return (
            <div>
                {
                    this.state.isLoggedIn && (
                        <div>
                            <div>Welcome Joshua</div>
                            <div><button onClick={this.login}>Logout</button></div>
                        </div>
                    )
                }
                {
                    !this.state.isLoggedIn && (
                        <div>
                            <div>Welcome Guest</div>
                            <div><button onClick={this.login}>Logout</button></div>
                        </div>
                    )
                }
            </div>
        )
        
    }
}

export default UserGreeting
