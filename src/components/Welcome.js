import React, {Component} from "react";
{/*  CLASS COMPONENT
    
class Welcome extends Component {
constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Class Component</h1>
            </div>
        );
    }
}
*/}

//export default Welcome ;

//CLASS COMPONENT WITH PROPS
class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Welcome {this.props.name}</h1>
            </div>
        );
    }
}
export default Welcome ;



