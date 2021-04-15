import React from 'react'
import PetsShowCard from './PetsShowCard'

export default function PetsShowContainer(props) {

    return (
        <div>
            <h1>Pets Show Page</h1>
            <PetsShowCard onClick={props.whatever} animal={props.animal}/>
        </div>
    )
}
