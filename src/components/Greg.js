import React from 'react'
import './Greg.scss'
import './Header.scss'
import gregphoto from '../images/greg.jpg'
const Greg = () => {
    return (
        <div className = "section">
            <div className="wrap">
                <div className="container1100">
                    <div className="greg-container">
                        <h2>You <span className="blue">will</span> grow your business with a Story Funnel. Period.</h2>

                        <div className="stat-box">
                            <div className="photo-stats">
                        
                                <img src={gregphoto} className="greg"/>

                                <div className="stats">
                                    <div className="stat-col">
                                        <div className="stat">
                                            <p><span className="stat-bold">15</span><br></br>years<br></br>of experience</p>
                                        </div>
                                        <div className="stat">
                                            <p><span className="stat-bold">7</span><br></br>years<br></br>in business</p>
                                        </div>
                                    </div>

                                    <div className="stat-col">
                                        <div className="stat">
                                            <p><span className="stat-bold">3X</span><br></br>average increase<br></br>in leads & sales</p>
                                        </div>
                                        <div className="stat">
                                            <p><span className="stat-bold">4M+</span><br></br>dollars earned<br></br>for my clients</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>

                            <div className="description">
                                <div className="read-more">
                                    <div className="readmore-button" onClick={() => {
                                        document.querySelector('.read-more').classList.add('open')
                                        document.querySelector('.readmore-button').classList.add('movedown')
                                        setTimeout(() => {
                                            document.querySelector('.readmore-button').classList.add('off')
                                        })
                                    
                                    }}>
                                    <h4 className="readbutton">Read More</h4>
                                    <div className="underline"></div>
                                    </div>
                                </div>
                                
                                <p>Hey, I’m Greg, your expert guide to building a Story Funnel Website that will grow your business.</p>
                                
                                <p>I know you are the kind of person who wants to be more than just “another” business. You desire to thrive and be the “Go-to Brand” that customers love doing business with. Whether you own a coffee shop, a construction company, or an eCommerce store, or anywhere in between, I know you want to be unstoppable.</p>
                                
                                <p>In order to be that way, you need a website that's making you tens of thousands of additional revenue every year (at a minimum!)</p>
                                
                                <p>The problem is, most business websites out there are built to sit around and look pretty, not make money.</p>
                                
                                <p>I’m on a mission to change that. That’s why I specialize in delivering Story Funnel Websites that help you capture more leads, drive more sales and predictably grow your business. I do all of this with a simple 3 step formula that works for any small business. </p>
                                
                                <p>So if your business website isn’t producing the results it should be for your business, I know exactly what’s wrong and how you can fix it. It starts by scheduling your free intro call with me so we can talk about it. </p>
                                
                                <p>Stop missing out on the millions of dollars my clients have collectively earned using my exact process for their website. I promise you I won’t waste your time. I’ll always be honest with you and I’ll show you what’s possible. </p>
                                
                                <p>Scheduling an Intro Call with me may just be the best 15 minutes you’ll ever set aside for your business.</p>
                                
                                <p>I hope to talk with you real soon.Greg Stone</p>

                                
                            </div>
                           
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Greg