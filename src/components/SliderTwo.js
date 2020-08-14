import React from 'react'
import {Carousel} from 'react-bootstrap'
import {useState} from 'react'
import './Slider.scss'
import snapslide1 from '../images/snapslide1.jpeg'
import snapslide2 from '../images/snapslide2.jpg'
import snapslide3 from '../images/snapslide3.jpg'
import snapslide4 from '../images/snapslide4.jpeg'
import snapslide5 from '../images/snapslide5.jpg'
import snapslide6 from '../images/snapslide6.jpg'
import snapslide7 from '../images/snapslide7.png'
import snapslide8 from '../images/snapslide8.jpeg'
import snapslide9 from '../images/snapslide9.jpg'
import "./SliderTwo.scss"
//import "./Slider.scss"
const SliderTwo = () => {

  
    // const [index, setIndex] = useState(0);
    
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    let check = document.querySelectorAll('company-logos')
    let right = document.querySelector('.carousel-control-next')
    right && right.addEventListener('click', () => {
        alert('done')
    })
    return (
        <div className = "section slider-two-content">
            <div className="slider-container">
            <div id="carouselExampleIndicators" data-interval={false} class="carousel slide" data-ride="carousel">
              
            <div class="carousel-inner">
              <div class="carousel-item image-box active">
                <img class="d-block w-100" src={snapslide1} alt="First slide" />
              </div>
              <div class="carousel-item image-box">
                <img class="d-block w-100" src={snapslide2} alt="Second slide" />
              </div>
              <div class="carousel-item image-box">
                <img class="d-block w-100" src={snapslide3} alt="Third slide" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

            
            
            </div>
  
        </div>
    )
}



export default SliderTwo