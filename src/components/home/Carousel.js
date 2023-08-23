import React from 'react';
import logo from '../../assets/logo.png';
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';



const Carousel = () => {
    return (
          
    <div id="carouselExampleCaptions" className="carousel slide" style={{marginTop:'70px'}}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
    </div>
    <div className="carousel-inner ">
      <div className="carousel-item">
      <img src={slider1} alt="HealerZ"  width="100%" />
        
      </div>
      <div className="carousel-item">
      <img src={slider2} alt="HealerZ"  width="100%" />
        
      </div>
      <div className="carousel-item active">
      <img src={slider3} alt="HealerZ"  width="100%" />
       
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
    );
  };
  
  export default Carousel;
  