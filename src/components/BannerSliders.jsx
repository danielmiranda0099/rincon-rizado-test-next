"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./banner-slider.css";
import { IconWhatsApp } from "./icons";

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
      className="banner-slider-container"
    >
      <SwiperSlide>
        <div className="banner-slider-content">
          <img src="/images/_DSC3245.webp" />
          <h2>RINCON CURLY</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam.</p>
          <div className="banner-buttons-container">
            <a className="btn btn-primary service-item-header-button-whatsapp">
              Agendar
              <span>
                <IconWhatsApp size="1.7rem" color="white" />
              </span>
            </a>
            <a className="btn btn-snow">Ver Productos</a>
          </div>
          
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner-slider-content">
          <img src="/images/_DSC3263.webp" />
          <h2>RINCON CURLY</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam.</p>
          <div className="banner-buttons-container">
            <a className="btn btn-primary service-item-header-button-whatsapp">
              Agendar
              <span>
                <IconWhatsApp size="1.7rem" color="white" />
              </span>
            </a>
            <a className="btn btn-snow">Ver Productos</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner-slider-content">
          <img src="https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg" />
          <h2>RINCON CURLY</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam.</p>
          <div className="banner-buttons-container">
            <a className="btn btn-primary service-item-header-button-whatsapp">
              Agendar
              <span>
                <IconWhatsApp size="1.7rem" color="white" />
              </span>
            </a>
            <a className="btn btn-snow">Ver Productos</a>
          </div>
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
