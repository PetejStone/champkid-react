import React from 'react'
import logo from '../images/logo.svg'
import './Nav.scss'
const Nav = () => {
    return (
        <div className = "section nav">
            <div className="wrap nav">
                <img src={logo} />
                <button className="mainButton navButton">Schedule an Intro Call</button>
            </div>
        </div>
    )
}

export default Nav