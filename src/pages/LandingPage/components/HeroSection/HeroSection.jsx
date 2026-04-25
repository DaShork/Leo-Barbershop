import React from 'react';
import { Carousel } from 'antd';
import { getImage } from '/src/utils/getImage.js';
import './HeroSection.css';


const HeroSection = () => (
  <Carousel autoplay>
    <div>
      <img src={getImage('/images/hero1.jpg')} alt='Leo Barbershop' className='hero-img' />
    </div>
    <div>
      <img src={getImage('/images/hero2.jpg')} alt='Leo Barbershop' className='hero-img' />
    </div>
    <div>
      <img src={getImage('/images/hero3.jpg')} alt='Leo Barbershop' className='hero-img' />
    </div>
    <div>
      <img src={getImage('/images/hero4.jpg')} alt='Leo Barbershop' className='hero-img' />
    </div>
  </Carousel>
);
export default HeroSection