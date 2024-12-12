import React from 'react'
{/*  FUNCTIONAL COMPONENT

function Greet(){
return <h1>Hello Dave</h1>
}
export default Greet
*/}


{/* ARROW FUNCTIONAL COMPONENT

const Greet = () =>{
    return <h1>Hello Dave</h1>
}
export default Greet
*/}


{/* ADDING PROPS 1

const Greet = (props) =>{
    return <h1>Hello {props.name}</h1>
}
export default Greet
*/}


{/* ADDING PROPS 2

const Greet = () =>{
    const name='props'
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}
export default Greet
*/}

// ADDING PROPS 3
const Greet = ({name}) =>{
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}
export default Greet