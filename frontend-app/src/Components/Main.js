import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home'
import Account from './Pages/Account'
import FurryFriendsFinder from './Pages/FurryFriendsFinder'
import About from './Pages/About'
import PetsShowContainer from './PetsShowContainer' 

import '../App.css'
export default class Main extends Component {

    state = {
        animals: [],
        animal: [],
        error: "",
        favorites: [],
        user: {}
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/animals")
            .then(response => response.json())
            .then(results => this.setState({ animals: results }))
    }

    signUp = user => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: user.username,
                    email: user.email,
                    f_name: user.f_name,
                    l_name: user.l_name,
                    password: user.password,
                    image: user.image
                }
            })
        })
        .then(response => response.json())
        .then(user => this.setState({ user: user}))
    }

    signIn = (username, password) => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        })
        .then(response => response.json())
        .then(result => {
            if (result.token){
            localStorage.setItem('token', result.token)
            this.setState({
                user: result.user
                })
            }
            else {
                this.setState({
                    error: result.error
                })
            }
        })
    }

    deleteUser = (user) => {
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .then(this.setState({ user: null }))
    }
    
    whatever = (animal) => {
        this.setState({ animal: animal })
    }

    render() {
        return (
            <main className="main">

                {/*HOME*/}<Route exact path='/' animal={this.state.animals} render={(routerProps) => <Home {...routerProps} animals={this.state.animals} user={this.state.user} whatever={this.whatever} />} />
                {/*ABOUT*/}<Route path='/about' render={(routerProps) => <About {...routerProps} user={this.state.user}/>} />
                {/*FFF*/}<Route path='/furryfriendsfinder' render={(routerProps) => <FurryFriendsFinder {...routerProps} animals={this.state.animals} user={this.state.user}/>} />
                {/*ACCOUNT*/} <Route path='/account' render={(routerProps) => <Account {...routerProps} deleteUser={this.deleteUser} error={this.state.error} signUp={this.signUp} signIn={this.signIn} user={this.state.user} />} />
                <Route path='/PetsPage' render={(routerProps) => <PetsShowContainer {...routerProps} onClick={this.whatever} animal={this.state.animal} /> } />

                <Redirect to='/' />

            </main>
        )
    }
}
