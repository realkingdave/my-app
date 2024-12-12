import React, {Component} from "react";
//class Welcome extends Component {
//    constructor(props) {
//        super(props);
//    }
//    state = {  }
//    render() { 
//        return ( 
//            <div>
//                <h1>Class Component</h1>
//            </div>
//        );
//    }
//}

//export default Welcome ;


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