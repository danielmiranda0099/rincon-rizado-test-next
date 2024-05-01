'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Grid, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./section-favorite-products.css";
import { ProductCard } from "..";

export function SectionFavoriteProducts() {
  return (
    <section className="section-contained-sm favorite-products-container">
      <div className="favorite-products-banner">
        <div className="favorite-products-banner-content">
          <h2 className="text-lg text-bold-smx">
            Tenemos Todos Los Productos Para Ti
          </h2>
          <p className="text-smx2 text-bold-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, deleniti.
          </p>
          <button className="btn btn-primary">Ver Todos Los Productos</button>
        </div>
        <div className="favorite-products-banner-background"></div>
      </div>

      <Swiper
        navigation={true}
        slidesPerView={1.5}
        grid={{
          rows: 1,
        }}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Grid, ]}
        breakpoints={{
          990: {
            slidesPerView: 2,
            grid: {
              rows: 2
            }
          }
        }}
        className="favorite-products-slider"
      >
        <SwiperSlide>
          <ProductCard image={'product1.webp'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'product2.webp'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'product3.webp'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'product4.webp'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'product5.webp'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'product6.webp'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'product7.webp'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'product1.webp'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'product2.webp'}/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
