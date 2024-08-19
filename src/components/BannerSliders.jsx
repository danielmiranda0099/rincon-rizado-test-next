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
          <h2>RINCON RIZADO</h2>
          <p>
            Un espacio ideal para aprender a cuidar tu cabello natural, con nosotros encontraras asesoria, productos ideales de acuerdo a tu textura, ademas de estilistas idoneas para dejar tus rizos fantasticos!.</p>
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
          <img src="/images/IMG_1807_1950x.webp" />
          <h2>BIENVENIDOS</h2>
          <p>
                  Nos llena de felicidad que hagas parte de nuestra comunidad rizada y quieras aprender a sacar la mejor version a tus rizos
                </p>
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
          <img src="/images/DSC_7557.jpg" />
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
          <img src="/images/IMG_1807_1950x.webp" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner-slider-content">
          <img src="/images/Promo-Madres-RR-04.png" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner-slider-content">
          <img src="/images/Promo-whatsapp-03.png" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
