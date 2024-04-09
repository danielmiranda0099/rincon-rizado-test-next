"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import "./section-reels.css";
import { IconInstagram } from "../icons";

export function SectionReels() {
  return (
    <section className="section-contained-sm reels-slider-container">
      <div className="reels-slider-header">
        <h2 className="text-lg text-bold-500 text-center margin-bottom-smx">
          Sigueme en mis redes sociales para más{" "}
          <span className="text-bg-yellow text-highlight">Tips</span> y
          <span className="text-bg-yellow text-highlight">Trucos</span>
        </h2>
        <p className="text-smx2 text-center margin-bottom-mdx">
          Puedes econtrar tip, trucos y recomensaciones, Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Officia?
        </p>

        <button className="btn  margin-bottom-lgx2 center-x"><IconInstagram /> Sigueme en Instagram</button>
      </div>
      <Swiper
        centeredSlides={true}
        slidesPerView={1.6}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        modules={[]}
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
            slidesPerView: 3,
            spaceBetween: 35,
          },
        }}
        initialSlide={1}
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
    </section>
  );
}
