import React from 'react'
import PetsShowCard from './PetsShowCard'

export default function PetsShowContainer(props) {

    return (
        <div>
            <PetsShowCard onClick={props.whatever} animal={props.animal}/>
        </div>
    )
}
