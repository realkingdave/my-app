import React, { Component } from "react";
//class Message extends Component {
//    constructor(props) {
//        super(props);
//    }
//    state = { 
//        Message: "Welcome Visitor"
//    }
//    render() { 
//        return ( 
//           <div>
//                <h1>
//                {this.state.Message}
//                </h1>  
//            </div>
//        );
//    }
//}
//export default Message;


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
                <button onClick={() => this.changeMessage()} >Subscribe</button>  
            </div>
        );
    }
}

export default Message;