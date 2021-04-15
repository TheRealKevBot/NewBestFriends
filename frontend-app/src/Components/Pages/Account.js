import React, { Component } from 'react'

import AccountContainer from '../AccountContainer'
import SignIn from '../SignIn'
import UsersPage from '../UsersPage'

export default class Account extends Component {

    render(){
        return (
            <div>
                {this.props.user.username ? 
                <UsersPage signUp={this.props.signUp} user={this.props.user} deleteUser={this.props.deleteUser} />
                :
                <> 
                <SignIn signIn={this.props.signIn} error={this.props.error}/>
                <AccountContainer signUp={this.props.signUp} />
                </>
                }
            </div>
        )
    }
}
