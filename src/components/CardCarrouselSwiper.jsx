"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./card-carrousel-swiper.css";
export function CardCarrouselSwiper({ headerCarrousel, data }) {
  return (
    <section className="section-contained-lg container-section-card-services">
      <div className="header-card-services">
        <h2>{headerCarrousel}</h2>
      </div>

      <Swiper
        slidesPerView= "auto"
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        
        className="container-swiper-wrapper-card-services"
      >
        {
          data.map((item) => (
            <SwiperSlide
            className="container-card-services"
            tag="a"
            // style={{
            //   backgroundImage: `url(${item.image})`,
            // }}
            href={item.path}
            key={item.title}
          >
            
                <img src={item.image} alt="" />
            
            <h3 className="card-services-title">{item.title}</h3>
          </SwiperSlide>
          ))
        }        
      </Swiper>
    </section>
  );
}
