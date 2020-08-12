import React from 'react'
import logo from '../images/logo.svg'
import './Problems.scss'
import moneyburn from '../images/moneyburn.jpg'
import redx from '../images/redx.svg'
import bars from '../images/bars.svg'
import lightning from '../images/lightning.svg'
const Problems = () => {
    return (
        <div className = "section width100 gray">
            <div className="wrap width100">
                <div className="container1200">
                    

                    <div className="problems-container">
                        
                        <div className="problemslist-container">
                            <h2>Every small business deserves a website that is <span className="blue">proactively contributing</span> to the growth of their business.</h2>
                            <p className="problem-heading">The <span className="red">problem</span> is, most websites...</p>
                            <ul className="list-container">
                                <li>
                                    <img src={redx} className="redx"/>
                                    <p className="problemtext">Fail to tell a persuasive story</p>
                                </li>

                                <li>
                                    <img src={redx} className="redx"/>
                                    <p className="problemtext">Have no strategy or sales funnel</p>
                                </li>

                                <li>
                                    <img src={redx} className="redx"/>
                                    <p className="problemtext">Struggle to bring in quality leads</p>
                                </li>

                                <li>
                                    <img src={redx} className="redx"/>
                                    <p className="problemtext">Look pretty but make no money</p>
                                </li>

                                <li>
                                    <img src={redx} className="redx"/>
                                    <p className="problemtext">Confuse & turn away customers</p>
                                </li>

                                <li>
                                    <img src={redx} className="redx"/>
                                    <p className="problemtext">Leave growth up to chance</p>
                                </li>
                            </ul>
                        </div>
                        <img src={moneyburn} className="moneyburn" />
                    </div>
                    
            
                </div>
               
            </div>
        </div>
    )
}

export default Problems