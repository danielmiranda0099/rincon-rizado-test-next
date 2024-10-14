"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./card-carrousel-swiper.css";
import Image from "next/image";
import Link from "next/link";
export function CardCarrouselSwiper({ headerCarrousel, data }) {
  return (
    <section className="section-contained-lg container-section-card-services">
      <div className="header-card-services">
        <h2>{headerCarrousel}</h2>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="container-swiper-wrapper-card-services"
      >
        {data?.map((item) => (
          <SwiperSlide
            key={item.path}
            className="container-card-services"
            // style={{
            //   backgroundImage: `url(${item.image})`,
            // }}
          >
            <Link href={item.path}>
              <Image src={item.image} alt="" width={500} height={500} />

              <h3 className="card-services-title">{item.title}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
