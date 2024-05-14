import React, { useState } from 'react';
import './Residencies.css';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import data from '../company/utils/slider.json';
import { sliderSettings } from '../company/utils/common';

const Residencies = () => {
  return (
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className='r-head flexColStar'>
          <span className='orangeText'>Best Choices</span>
          <span className='PrimaryText'>Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className=' flexColStar r-card'>
                <img src={card.image} alt='home' />
                <span className='secondaryText r-price'>
                  <span style={{color:'orange'}} >$</span>
                  <span style={{color:'black', margin:5}}>{card.price}</span>
                </span>
                <span className='primaryText'>{card.name}</span>
                <span className='CardDetail'>{card.detail}</span>
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButton=()=>{
const swiper=useSwiper();
return(
  <div className='flexCenter r-button'>
    <button onClick={()=>swiper.slidePrev()}>&lt;</button>
    <button onClick={()=>swiper.slideNext()}>&gt;</button>
  </div>
  )
  }