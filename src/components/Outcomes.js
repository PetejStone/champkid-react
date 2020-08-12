import React from 'react'
import logo from '../images/logo.svg'
import './Outcomes.scss'
import girl from '../images/mainimg.jpg'
import stop from '../images/stop.svg'
import bars from '../images/bars.svg'
import lightning from '../images/lightning.svg'
const Outcomes = () => {
    return (
        <div className = "section">
            <div className="wrap">
                <div className="container1200">
                    <div className="vertLine"></div>
                    <img src={girl} className="girltop" />
                    <div className="outcomes-grid">
                        <div className="outcome childone">
                            <img src={stop} className="outcome-logo" />
                            <p className="outcome-text">Stop losing money</p>
                        </div>

                        <div className="outcome childtwo">
                            <img src={lightning} className="outcome-logo" />
                            <p className="outcome-text">Drive more leads</p>
                        </div>

                        <div className="outcome childthree">
                            <img src={bars} className="outcome-logo" />
                            <p className="outcome-text">Multiply your income</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Outcomes