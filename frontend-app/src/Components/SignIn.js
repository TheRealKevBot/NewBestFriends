import React, { Component } from 'react'

export default class SignUp extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signIn(this.state.username, this.state.password)
    }

    render() {
        return (
            <div>
                <h1>Verification Required</h1>
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input name='username' value={this.state.username} onChange={this.handleChange}/>
                    <label>Password: </label>
                    <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                    {this.props.error ? <p style={{color: 'red'}}>{this.props.error}</p> : null}
                    <button type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}
