import React from 'react'
import PetsContainer from '../PetsContainer'

export default function Home(props) {
    return (
        <div>
            <h1>Welcome to New BestFriends</h1>
            <h2>Here you will find all animals that are up for adoption or sale</h2>
            <p className="disclaimer">We understand that people most often look for a certain breed or for kittens/puppies, but we highly recommend
                you first take a look at the animals that are up for adoption. These are animals that are usually here because their
                owners no longer have the means to properly maintain a healthy lifestyle for them, not because of anything they have done. 
            </p>
            <p className="disclaimer">It is our mission to help find a home for all animal's in need, and we hope that you will join us!</p>
            <PetsContainer animals={props.animals} whatever={props.whatever}/>
        </div>
    )
}
