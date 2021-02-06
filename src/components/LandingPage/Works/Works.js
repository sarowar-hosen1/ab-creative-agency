import React from 'react';
import './Works.css';

import SwiperCore, {  Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'

SwiperCore.use([ Pagination, Scrollbar, A11y, Autoplay]);


const Works = () => {

    return (
        <section className='works-container'>
            <h2 className="section-title text-brand text-white">Here Are Some Of Our <span>Works</span></h2>
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    autoplay={{delay:2000}}
                    loop={true}
                    flipEffect={
                        {slideShadows: false}
                      }
                    breakpoints= {{
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                          slidesPerView: 2,
                          spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 3,
                          spaceBetween: 40
                        }}
                      }
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/RcKfMgc/carousel-1.png" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/nfJGxRx/carousel-2.png" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/GnrzkCT/carousel-4.png" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/1Jd35kM/carousel-5.png" alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Works;