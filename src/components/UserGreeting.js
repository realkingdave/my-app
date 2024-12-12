import React, { Component } from 'react'
//CONDITIONAL RENDERING


//if/else CONDITIONAL RENDERIING

// class UserGreeting extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = { 
//         isLoggedIN : true
//     }
//     render() { 
//         if (this.state.isLoggedIN){
//         return <div>Welcome Vishwas</div>
//     }
//     else{
//         return <div>Welcome Guest</div>
//     }
//     }
// }

// export default UserGreeting;


// TERNART C.R
// class UserGreeting extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = { 
//         isLoggedIN : false
//     }
//     render() { 
//         return this.state.isLoggedIN? <div>Welcome Vishwas</div> : <div>Welcome Guest</div>
//     }
// }

// export default UserGreeting;


class UserGreeting extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        isLoggedIN : true
    }
    render() { 
        return this.state.isLoggedIN && <div>Welcome Vishwas</div>
    }
}

export default UserGreeting;



