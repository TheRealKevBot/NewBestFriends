import React, { Component } from "react"

export default class PetsShowCard extends Component {

    render(){
        return (
            <div className="pets-show-card">
                <h1>{this.props.animal.name}</h1>
                <img src={this.props.animal.image} className="animal-img"/>
                <h2 className="name">Species: {this.props.animal.animal_type}</h2>
                <h3 className="breed">Breed: {this.props.animal.breed}</h3>
                <p className="description"> {this.props.animal.name}'s Description: {this.props.animal.description}</p>
                <p className="breed-info"> {this.props.animal.breed}'s Breed Info: {this.props.animal.breed_info}</p>
            </div>
        )
    }
}
