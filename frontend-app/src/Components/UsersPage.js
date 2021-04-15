import React, { Component } from 'react'

export default class UsersPage extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this.props.deleteUser(this.props.user)
        window.location.reload('http:localhost:3001')
    }

    logOut = (event) => {
        event.preventDefault()
        window.location.reload('http:localhost:3001')
    }

    render() {
        return (
            <div>
                 <h1>Welcome Back {this.props.user.f_name.toUpperCase()} !</h1>
                 <h2>We've sure missed you!</h2>
                 <h3>Account Information</h3>
                 <div className='user-card'>
                     <img src={this.props.user.image} alt={this.props.user.username}/>
                     <p>Username: {this.props.user.username}</p>
                     <p>Display Name: {this.props.user.f_name} {this.props.user.l_name}</p>
                     <p>Current Email: {this.props.user.email}</p>
                     <button onClick={this.logOut}>Sign Out</button>
                     <button onClick={this.handleClick}>❌ Delete Account ❌</button>
                 </div>

                 <h4>Currently Watching</h4>
                 <div className='watching'>
                     
                 </div>

            </div>
        )
    }
}
