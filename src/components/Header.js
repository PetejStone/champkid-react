import React from 'react'
import logo from '../images/logo.svg'
import './Header.scss'
const Header = () => {
    return (
        <div className = "section">
            <div className="wrap">
                <div className="container900">
                    <h1 className="heading">
                    We help businesses launch <span className="blue">Story Funnel Websites</span> that convert 3x more leads & sales than normal websites.
                    </h1>
                    <div className="buttonHeader">
                        <button className="mainButton">Schedule an Intro Call</button>
                        <div className="pdfButton">
                            <p>Free PDF: 3 Web Mistakes Hurting Your Biz</p>
                            <div className="underline"></div>
                        </div>
                        
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Header