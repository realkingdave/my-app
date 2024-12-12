import React, { Component } from "react";

class FormHandling extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:''
        };
    }

    handleUserame = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = (event) => {
            alert (`${this.state.username} ${this.state.password}`)
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit} >

                <div>
                    <label>Username: </label>
                    <input
                    type='text'
                    value={this.state.username} 
                    onChange={this.handleUserame}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                    type='text'
                    value={this.state.password} 
                    onChange={this.handlePassword}
                    />
                </div>
                
                <button type="submit">SUBMIT</button>

            </form>
        );
    }
}

export default FormHandling;