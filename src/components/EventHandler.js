import React, {Component} from "react";

{/* BINDING 1

class EventHandler extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        Greetings:"hello"
    }
    clickEvent(){
        this.setState({
            Greetings: "what's up"
        })
        
    
    }
    render() { 
        return ( 
            <div>
                <h1>{this.state.Greetings}</h1>
                <button onClick={this.clickEvent.bind(this)}>Click</button>
            </div>
        );
    }
}

export default EventHandler;
*/}


{/* BINDING 2

class EventHandler extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        Greetings:"hello"
    }
    clickEvent(){
        this.setState({
            Greetings: "what's up"
        })
        
    
    }
    render() { 
        return ( 
            <div>
                <h1>{this.state.Greetings}</h1>
                <button onClick={() =>this.clickEvent()}>Click</button>
            </div>
        );
    }
}

export default EventHandler;
*/}


{/* BINDING 3

class EventHandler extends Component {
    constructor(props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this)
    }
    state = { 
        Greetings:"hello"
    }
    clickEvent(){
        this.setState({
            Greetings: "what's up"
        })
        
    
    }
    render() { 
        return ( 
            <div>
                <h1>{this.state.Greetings}</h1>
                <button onClick={this.clickEvent}>Click</button>
            </div>
        );
    }
}

export default EventHandler;
*/}


class EventHandler extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        Greetings:"hello"
    }
    clickEvent = () => {
        this.setState({
            Greetings: "what's up"
        })
    }
    render() { 
        return ( 
            <div>
                <h1>{this.state.Greetings}</h1>
                <button onClick={this.clickEvent}>Click</button>
            </div>
        );
    }
}

export default EventHandler;

