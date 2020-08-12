import React from 'react'
import guy from '../images/dudemac.jpg'
import girl from '../images/girlmac.jpg'
import './SliderIntro.scss'
const SliderIntro = () => {
    return (
        <div className = "section slider-intro">
            <div className="wrap">
                <div className="container900">
                    <div className="slider-intro-container">
                        <div className="image-container">
                            <div className="intro-img">
                                <img src={girl}/>
                            </div>

                            <div className="intro-img">
                                <img src={guy} />
                            </div>
                        </div>
                    </div>
                </div>
               <div className="container1100">
                    <h2>We've helped <span className="blue">hundreds</span> of clients, from local small businesses to world class companies.</h2>
                    <p>Listen to their transformation stories.</p>
               </div>
            </div>
        </div>
    )
}

export default SliderIntro