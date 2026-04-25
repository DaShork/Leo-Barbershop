import React from 'react';
import { Carousel } from 'antd';
import './HeroSection.css';


const HeroSection = () => (
  <Carousel autoplay>
    <div>
      <img src = '/images/hero1.jpg' alt = 'Leo Barbershop' className = 'hero-img' />
    </div>
    <div>
      <img src = '/images/hero2.jpg' alt = 'Leo Barbershop' className = 'hero-img' />
    </div>
    <div>
      <img src = '/images/hero3.jpg' alt = 'Leo Barbershop' className = 'hero-img' />
    </div>
    <div>
      <img src = '/images/hero4.jpg' alt = 'Leo Barbershop' className = 'hero-img' />
    </div>
  </Carousel>
);
export default HeroSection