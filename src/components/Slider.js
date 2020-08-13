import React from 'react'
import {Carousel} from 'react-bootstrap'
import {useState} from 'react'
import './Slider.scss'
import left from '../images/left.svg'
import right from '../images/right.svg'
const Slider = () => {

  
    // const [index, setIndex] = useState(0);
    
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    return (
        <div className = "section">
            <div className="wrap">
                <div className="container900">
                    <div className="slider-container">
                        <Carousel className="carousel" interval={100000000}>
                            <Carousel.Item>
                              
                                <div className="testimony-box">
                                    <p className="testimony">"We could not seem to identify and break through the barrier between us and our customers. We felt like we were treading water, running out of time to pay the bills and had very little business lined up. Greg helped us specifically in identifying our customer and our product with focal clarity, and really got to know our business to help formulate a solid plan. When we used his framework we brought in new customers and gained confidence in our brand. We now see an upward trend and have dialed ourselves in to capitalize on the market in which we are the authority."</p>
                                    <p className="client">Jon Peterson<br></br>Cofounder, Peterson Brothers Automation</p>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                              
                                <div className="testimony-box">
                                    <p className="testimony">"Everything we originally created was ad-hoc and had no consistency. Our branding was very scattered and frustrating. Then ChampKid Design came in and explained EVERYTHING. This allowed us to focus on long term results instead of creating something that would need to be changed a year from now. The results are exactly what we envisioned. There is a lot of excitement about the brand change and future of our company."</p>
                                    <p className="client">Amber Hovious<br></br>VP of Marketing, Teamwork Commerce</p>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                              
                                <div className="testimony-box">
                                    <p className="testimony">"The personality of our brand was lost in our website and it struggled to help new visitors understand why they should try our products. Now we’re very excited about our strong conversion rates and the bump to our average order value that is providing great incremental revenue ($225,000 additional revenue within 6 months)! So far we have seen over an 800% positive return on investment from our work with ChampKid Design!"</p>
                                    <p className="client">Travis Tuttle<br></br>CE), Bend Soap Company</p>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                              
                                <div className="testimony-box">
                                    <p className="testimony">"I felt like I was trying to move a mountain by myself… then I had several conversations with Greg from ChampKid Design where he asked great questions. He was a great listener and gave his expert opinion while also still collaborating to make sure it’s what we felt comfortable with. Greg offered a real solution on how to set ourselves apart. EVERYONE, consumers and other business owners, all comment on our brand. We’ve been in business for only 8 months and most customers I talked with thought we’d been in business for years."</p>
                                    <p className="client">Callie Carpenter<br></br>Founder, PNW Cookie Company</p>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                              
                                <div className="testimony-box">
                                    <p className="testimony">"There was fear of the unknown. We had no plan in our logo, marketing or website. ChampKid Design spent a lot of time listening to what direction we thought we wanted to go. Greg helped formulate a coherent plan to get us there. We immediately knew we made the right decision upon reviewing his proposal. The results have been satisfying and our return on investment is strong!"</p>
                                    <p className="client">Eric Corder<br></br>Fouunder, Cornerstone NW Inspections</p>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                              
                                <div className="testimony-box">
                                    <p className="testimony">"People had a hard time knowing what our business was or remembering our brand. Obviously, that’s the exact opposite of what we wanted so we reached out to Greg and worked with him. Our business immediately was taken to the next level. We now look more professional and people have more confidence in our work. Plus, we’ve experienced an increase in business! There’s not a thing we would change about our experience working with Greg. It was a great investment and well worth it."</p>
                                    <p className="client">Anna Kerr<br></br>Cofounder, Rusting Woodworking</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Slider