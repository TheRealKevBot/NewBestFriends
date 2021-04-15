import React from 'react'
import PetsCard from './PetsCard'

export default function PetsContainer(props) {

    const animals = props.animals.map(animal => {
        return <PetsCard animals={animal} whatever={props.whatever}/>
    })


    return (
        <div className="pets-container">
            {animals}
        </div>
    )
}
