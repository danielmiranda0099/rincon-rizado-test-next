"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "./section-reels.css";
import { IconInstagram } from "../icons";

export function SectionReels() {
  return (
    <section className="section-contained-sm reels-slider-container">
      <div className="reels-slider-header">
        <h2 className="text-lg text-bold-500 text-center margin-bottom-smx">
          Siguenos en nuestras redes sociales 
        </h2>
        <p className="text-md text-center margin-bottom-mdx">
        para que no te pierdas todos los tips, enseñanzansas y recomendaciones que compartimos para el cuidado
        de tus rizos.
        </p>

        <button className="btn margin-bottom-lgx2 center-x text-md"> Sigueme en Instagram <IconInstagram size="2.5rem" color="#fff" /></button>
      </div>

      <div className="reels-slider-swiper-container">
        <Swiper
          navigation={true}
          pagination={true}
          slidesPerView={1.6}
          spaceBetween={30}
          modules={[Navigation, Pagination]}
          breakpoints={{
            1500: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            990: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
            590: {
              slidesPerView: 2,
              spaceBetween: 35,
            },
          }}
          className="my-swiper"
        >
          <SwiperSlide
            tag="iframe"
            width="315"
            height="560"
            src="https://www.youtube.com/embed/m31WtCuDB3k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowfullscreen
          ></SwiperSlide>
          <SwiperSlide
            tag="iframe"
            width="315"
            height="560"
            src="https://www.youtube.com/embed/kAZPcNtW6MY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></SwiperSlide>
          <SwiperSlide
            tag="iframe"
            width="315"
            height="560"
            src="https://www.youtube.com/embed/tBlVw1V_0no"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></SwiperSlide>
          <SwiperSlide
            tag="iframe"
            width="315"
            height="560"
            src="https://www.youtube.com/embed/R8M7bjZoV5w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
