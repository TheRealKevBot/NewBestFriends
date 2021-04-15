import React from 'react'
import { Link } from 'react-router-dom';

import '../App.css';

export default function Header() {
    return (
        <header className="header">
            <h1 className="title">New BestFriends</h1>
            <ul className="nav-bar">
                <li className="link"><Link to='/'>
                    Home
                </Link></li>
                <li className="link"><Link to='/about'>
                    Who We Are
                </Link></li>
                <li className="link"><Link to='/furryfriendsfinder'>
                    FurryFriendsFinder
                </Link></li>
                <li className="link"><Link to='/account'>
                    Account
                </Link></li>
            </ul>
        </header>
    )
}
