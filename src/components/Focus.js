import React, { Component } from "react";

class Focus extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef() 
    }

    componentDidMount(){
     //   this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    render() {
        return (
            <input type='text' />
        );
    }
}

export default Focus;