import React from 'react'
import book from '../images/3mistakes.png'
import './Header.scss'
import './Pdfbook.scss'
const Pdfbook = () => {
    return (
        <div className = "section width100 lightblue">
            <div className="wrap">
                <div className="container900">
                    <div className="pdfblock">
                        <div className="leftpdf">
                            <h5>FREE PDF DOWNLOAD</h5>
                            <h4>Three Easy to Fix Mistakes Most Businesses Make on Their Website (and Why It’s Hurting Their Growth)</h4>
                            <p>A powerful resource you can consume in 20 minutes that gives you actionable steps to improve your online presence and win more customers.</p>
                            <div className="pdfButton">
                            <p>Download For Free</p>
                            <div className="underline"></div>
                        </div>
                        </div>

                        <div className="rightpdf">
                            <img src={book} />
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Pdfbook