import React from 'react';
import { Carousel } from 'antd';
import { getImage } from '/src/utils/getImage.js';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className = 'hero-container'>
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
      <div className='overlay'>
        <h1 className = 'hero-title'>LEO BARBERSHOP</h1>
        <h1 className = 'hero-sub'>EMBRACE YOUR UNIQUENESS</h1>
        <button className = 'hero-btn'>
          <span className = 'hero-btn-text'>Đặt lịch ngay !</span>
        </button>
      </div>

    </div>
  )

}

export default HeroSection