import React from 'react'
import { Link } from 'react-router-dom'

export default function PetsCard(props) {

    return (
        <div className="animal-card">
            <h1>{props.animals.name}</h1>
            <img src={props.animals.image} alt={props.animals.name} className="animal-img"/>
            <h2 className="name">Species: {props.animals.animal_type}</h2>
            <h3 className="breed">Breed: {props.animals.breed}</h3>
            <h4 className='animal-link' onClick={() => props.whatever(props.animals)}><Link to='/PetsPage'>Learn More About {props.animals.name}</Link></h4>
        </div>
    )
}
