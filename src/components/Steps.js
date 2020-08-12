import React from 'react'
import './Steps.scss'
import arrow from '../images/curvearrow.svg'
const Steps = () => {
    return (
        <div className = "section">
            <div className="wrap">
                <div className="container1100">
                    <div className="steps-intro">
                        <div className="grow-steps">
                            <h2>We don't build websites that do nothing. We build Story Funnel Websites that <span className="blue">remarkably grow businesses</span>.</h2>
                            <p>Story Funnel Websites connect your business to your customer's story and intentionally lead them into a meaningful transaction with you.‍</p>
                            <p>Your Story Funnel Website will predictably bring you more leads and more sales without hassle or friction. On average, our customers have tripled their leads and sales, and have collectively earned millions of additional revenue. </p>
                            <p>Our process to launch a Story Funnel is done in <span className="bold"> 3 Steps:</span> </p>
                        </div>
                    </div>
                    <div className="three-steps-container">
                        <div className="step step-one">
                            <p className="bigNum num-one">01</p>

                            <h4 className="step-title">Hone In <br></br> Your Messaging</h4>

                            <p className="step-p">It can be hard to know what to say to your visitors. The key is story. We help you with a messaging framework that breaks down objections and persuades visitors you have what they need.</p>
                        </div>

                        <div className="step step-two">
                            <p className="bigNum num-two">02</p>

                            <h4 className="step-title">Build Your <br></br>Sales Funnel</h4>

                            <p className="step-p">Most websites lack a strategic sales funnel that leads their visitors into a meaningful transaction. We help you build one that intentionally guides your visitors into becoming customers.</p>
                        </div>

                        <div className="step step-three">
                            <p className="bigNum num-three">03</p>

                            <h4 className="step-title">Design Your <br></br>User Experience</h4>

                            <p className="step-p">It's common to settle for template site that lacks personality causing visitors to bounce. We help you launch an aesthetic and trustworthy web experience that customers remember.</p>
                        </div>
                    </div>

                </div>
                <img src={arrow} className="arrow" />
            </div>
        </div>
    )
}

export default Steps