//WORKS WITH THE CHILD COMPONENT 

//USING A METHOD AS PROPS TO GIVE AN ALERT
//ALERT WITHIN PP AND DISLAYED FROM PP

import React, {Component} from "react";
import CC from "./CC";

// class PP extends Component {
//     constructor(props) {
//         super(props);
//         this.greetMe = this.greetMe.bind(this)
//     }
//     state = { 
//         greetMe:"Dave"
//     }
//     greetMe(){
//         alert(`Hello ${this.state.greetMe}`)
//     }
//     render() { 
//         return (  
//             <div>
//                 <CC handller={this.greetMe} />
//             </div>
//         );
//     }
// }

//export default PP;


class PP extends Component {
    constructor(props) {
        super(props);
        this.greetMe = this.greetMe.bind(this)
    }
    state = { 
        greetMe:"Dave"
    }
    greetMe(from){
        alert(`Hello Mr. ${this.state.greetMe} from ${from}`)
    }
    render() { 
        return (  
            <div>
                <CC handller={this.greetMe} />
            </div>
        );
    }
}

export default PP;