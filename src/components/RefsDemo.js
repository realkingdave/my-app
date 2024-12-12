import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputref = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    // clickHandler = ()=> {
    //     alert(this.inputRef.current.value)
    // }
    render() {

        return (
            <div>
                <lable>Username</lable>
                <input type='text' ref={this.inputRef}/>
                <br />
                <button onClick={this.clickHandler} >CLICK</button>
            </div>
        );
    }
}

export default RefsDemo;