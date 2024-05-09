"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './banner-slider.css';

export function BannerSlider() {
  return (
    <Swiper
      effect={"fade"}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="banner-slider-content">
          <img src="https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner-slider-content">
          <img src="https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner-slider-content">
          <img src="https://images.pexels.com/photos/17547816/pexels-photo-17547816/free-photo-of-mujer-en-pie-de-pie-retrato.jpeg" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner-slider-content">
          <img src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
