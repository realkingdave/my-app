import React, { Component } from "react";
{/* CLASS COMPONENT WITH STATE
class Message extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        Message: "Welcome Visitor"
    }
    render() { 
        return ( 
        <div>
                <h1>
                {this.state.Message}
                </h1>  
        </div>
        );
    }
}
//export default Message;
*/}


// CLASS COMPONENT WITH SETSTATE
class Message extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        Message: "Welcome Visitor"
    }
    changeMessage(){
        this.setState({
            Message:"Thanks for subscribing "
        })
    }
    render() { 
        return ( 
            <div>
                <h1>
                {this.state.Message}
                </h1>
                <button onClick={this.changeMessage.bind(this)}>Subscribe</button>  
            </div>
        );
    }
}

export default Message;