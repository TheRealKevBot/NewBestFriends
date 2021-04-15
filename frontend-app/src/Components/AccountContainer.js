import React, { Component } from 'react'

export default class SignUpForm extends Component {

    state = {
        username: '',
        email: '',
        f_name: '',
        l_name: '',
        password: '',
        image: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signUp(this.state)
    }

    render() {
        return (
            <div>
                <h1>Registration Credentials</h1>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input name='username' value={this.state.username} onChange={this.handleChange}/>
                    <label>Email: </label>
                    <input name='email' value={this.state.email} onChange={this.handleChange}/>
                    <label>First Name: </label>
                    <input name='f_name' value={this.state.f_name} onChange={this.handleChange}/>
                    <label>Last Name: </label>
                    <input name='l_name' value={this.state.l_name} onChange={this.handleChange}/>
                    <label>Password: </label>
                    <input type="password" type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
                    <label>Image URL: </label>
                    <input name='image' value={this.state.image} onChange={this.handleChange}/>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
