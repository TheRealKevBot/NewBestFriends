import React from 'react'
import PetsContainer from '../PetsContainer'

export default function FurryFriendsFinder(props) {
    return (
        <div>
            <h1>Welcome to the FurryFriendsFinder</h1>
            <h2>The Patent Pending FurryFriendsFinder, will access our vast database of all currently available animals. Through analyzing your various search parameters,
                our supercomputer will evaluate and show you the best results available to you.
            </h2>
            <div className='filters'>
                <div className='sort-by-species-group'>
                    <label htmlFor='sort-by-species'>Sort by Species</label>
                    <select name='species' className='sort-by-species'>
                        <option value='all'>All</option>
                        <option value='cat'>Cat</option>
                        <option value='dog'>Dog</option>
                    </select>
                </div>

                <div className='sort-by-breed-group'>
                    <label htmlFor='sort-by-breed'>Sort by Breeds</label>
                    <select name='breed' className='sort-by-breed'>
                        <option value='all'>All</option>
                        <option value='bombay'>Bombay</option>
                        <option value='great dane'>Great Dane</option>
                        <option value='shiba inu'>Shiba Inu</option>
                        <option value='siberian husky'>Siberian Husky</option>
                        <option value='toyger'>Toyger</option>
                    </select>
                </div>            

                <div className='sort-by-age-group'>
                    <label htmlFor='sort-by-age'>Sort by Ages</label>
                    <select name='age' className='sort-by-age'>
                        <option value='all'>All</option>
                        <option value='one'>1</option>
                        <option value='two'>2</option>
                        <option value='three'>3</option>
                        <option value='four'>4</option>
                        <option value='five'>5</option>
                        <option value='six'>6</option>
                        <option value='seven'>7</option>
                        <option value='eight'>8</option>
                        <option value='nine'>9</option>
                        <option value='ten'>10 +</option>
                    </select>
                </div>            

                <div className='sort-by-activity-level-group'>
                    <label htmlFor='sort-by-activity-level'>Sort by Activity Level</label>
                    <select name='activity-level' className='sort-by-activity-level'>
                        <option value='all'>All</option>
                        <option value='one'>1</option>
                        <option value='two'>2</option>
                        <option value='three'>3</option>
                        <option value='four'>4</option>
                        <option value='five'>5</option>
                        <option value='six'>6</option>
                        <option value='seven'>7</option>
                        <option value='eight'>8</option>
                        <option value='nine'>9</option>
                        <option value='ten'>10</option>
                    </select>
                </div>

                <div className='sort-by-shedding-level-group'>
                    <label htmlFor='sort-by-shedding-level'>Sort by Shedding Level</label>
                    <select name='shedding-level' className='sort-by-shedding-level'>
                        <option value='all'>All</option>
                        <option value='one'>1</option>
                        <option value='two'>2</option>
                        <option value='three'>3</option>
                        <option value='four'>4</option>
                        <option value='five'>5</option>
                        <option value='six'>6</option>
                        <option value='seven'>7</option>
                        <option value='eight'>8</option>
                        <option value='nine'>9</option>
                        <option value='ten'>10</option>
                    </select>
                </div>            

                <div className='sort-by-barking-level-group'>
                    <label htmlFor='sort-by-barking-level'>Sort by Barking Level</label>
                    <select name='barking-level' className='sort-by-barking-level'>
                        <option value='all'>All</option>
                        <option value='one'>1</option>
                        <option value='two'>2</option>
                        <option value='three'>3</option>
                        <option value='four'>4</option>
                        <option value='five'>5</option>
                        <option value='six'>6</option>
                        <option value='seven'>7</option>
                        <option value='eight'>8</option>
                        <option value='nine'>9</option>
                        <option value='ten'>10</option>
                    </select>
                </div>            

            </div>
            
            <img className='patent' src='https://blogstudio.s3.amazonaws.com/utpatents/ba16ed77f897e5bfea115cd9bbc986f2.png' alt='Patent Pending' />
            
        </div>
    )
}
