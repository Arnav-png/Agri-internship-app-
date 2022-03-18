import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';
import { useNavigate } from 'react-router-dom'
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function App() {

  const navigate = useNavigate()

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        {i === 0 ?
          <div className='about'>
            <img src="../New Folder/2342.PNG" alt="" />
            <h1>Buy Agri Products</h1>
            <p>Order Seeds , Crop Nutrition , Crop Protection ,Fertilizers,Hardware,Animal needs etc from the app get delivered to your doorstep</p>
            <button>Next</button>
          </div> : null}
        {i === 1 ?
          <div className='about'>
            <img src="../New Folder/3242.PNG" alt="" />
            <h1>Agri Expert Advice</h1>
            <p>Upload pictures and get real-time solutions from Hi Mkulima agri experts for any crop related issues. Our experts will answer all your questions...</p>
            <button>Next</button>

          </div> : null}
        {i === 2 ?
          <div className='about'>
            <img src="../New Folder/23423.PNG" alt="" />
            <h1>Sell Your Produce</h1>
            <p>Buy and sell your crop to anyone from anywhere in Tanzania with Hi Mkulima hassle free transactions between buyers and sellers...</p>
            <button>Next</button>

          </div> : null}
        {i === 3 ?
          <div className='about'>
            <img src="../New Folder/Capture.PNG" alt="" />
            <h1>Watch Posts  & Videos</h1>
            <p>Watch crop related customized posts ,videos,news,agri knowledge,schemes,subsidy... read articles from our experts as per yor needs...</p>
            <button>Next</button>

          </div> : null}
        {i === 4 ?
          <div className='about'>
            <img src="../New Folder/Capture1.PNG" alt="" />
            <h1>Market View</h1>
            <p>Get real-time updates on market prices of your crop from nearby market places.Check price trends of your crop,new feeds and more...</p>
            <button onClick={() => navigate("/auth")}>Sign Up</button>

          </div> : null}
      </SwiperSlide>
    );
  }


  return (
    <React.Fragment>
      <img style={{ transform: "rotate(180deg)", height: "24px", width: "24px", margin: "1rem 1rem" }} src="./New folder/icons8-right-arrow-32.png" alt="" />
      <Swiper
        id="main"
        // thumbs={{ swiper: thumbsSwiper }}
        // controller={{ control: controlledSwiper }}
        tag="section"
        // wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      // onInit={(swiper) => console.log('Swiper initialized!', swiper)}
      // onSlideChange={(swiper) => {
      //   console.log('Slide index changed to: ', swiper.activeIndex);
      // }}
      // onReachEnd={() => console.log('Swiper end reached')}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
}

export default App;