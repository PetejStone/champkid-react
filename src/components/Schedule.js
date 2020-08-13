import React from 'react'
import './Schedule.scss'
import './Steps.scss'

const Schedule= () => {
    return (
        <div className = "section">
            <div className="wrap">
                <div className="container1100">
                    <div className="schedule-container">
                        <h2 className='schedule-h2'>Schedule Your Intro Call Today</h2>
                        <p className="schedule-heading-p">Growing your business starts with<br></br> a Story Funnel Website</p>
                        <div className="three-steps-container">
                            <div className="step schedule-step">
                                <p className="bigNum num-one">01</p>

                                <h4 className="step-title">Schedule Your Intro Call</h4>

                                <p className="step-p">Meet with brand expert, Greg Stone, for a quick and painless Intro Call (about 15 minutes) so he can get to know you and your business.</p>
                            </div>

                            <div className="step schedule-step">
                                <p className="bigNum num-two">02</p>

                                <h4 className="step-title">Learn What's Possible</h4>

                                <p className="step-p">You’ll discover what marketing gaps your website has and what kind of results are possible for your business with a Story Funnel Website.</p>
                            </div>

                            <div className="step schedule-step">
                                <p className="bigNum num-three">03</p>

                                <h4 className="step-title">Walk Away With a Plan</h4>

                                <p className="step-p">Get a clear plan on exactly what you need to do to grow your business online. If we’re a good fit, we’ll invite you into a collaborative relationship to help you hit a grand slam.</p>
                            </div>
                        </div>
                        
                    </div>
                    <button className="mainButton">Schedule Your intro Call</button>
                    <p className="aside">We only take on a limited amount of clients every month. Schedule your Intro Call now to secure your spot.</p>
                </div>
               
            </div>
        </div>
    )
}

export default Schedule