"use client";
import { IconCheck } from "@/components/icons";
import "./styles.css";

import { ALL_SERVICE } from "@/placeholders/services";
import { SERVICE_DEFAULT } from "@/placeholders/services/default";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ServisePage({ params }) {
  let serviceSlug = params.service;

  let data = ALL_SERVICE.find((service) => service.slug === serviceSlug);

  if (!data) data = SERVICE_DEFAULT;

  console.log(data);

  return (
    <section className="section-contained-full service-section-container">
      <div className="section-contained-md service-banner">
        <div className="service-banner-content">
          <h1>{data.name_service}</h1>

          <p className="service-banner-content-description">
            {data.short_description}
          </p>

          <span>Ver Mas</span>

          <div className="service-banner-price">
            <p>Tarifa:</p>
            <span>{data.price}</span>
          </div>

          <button className="btn btn-snow">Agendar Servicio</button>
        </div>

        <div className="service-banner-bg-content">
          <img src="/images/image-banner-without-gb.png" />
        </div>
      </div>

      {/* <div className="section-contained-sm service-result-images">
        <img src="https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg" />
        <img src="https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg" />
        <img src="/images/image-banner-products-favorite.jpg" />
        <img src="https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg" />
      </div> */}

      <Swiper
        tag="div"
        slidesPerView="auto"
        spaceBetween="16"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="section-contained-full service-result-images-container"
      >
        <SwiperSlide tag="div" className="service-result-images">
          <img src="https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg" />
        </SwiperSlide>
        <SwiperSlide tag="div" className="service-result-images">
          <img src="https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg" />
        </SwiperSlide>
        <SwiperSlide tag="div" className="service-result-images">
          <img src="/images/image-banner-products-favorite.jpg" />
        </SwiperSlide>
        <SwiperSlide tag="div" className="service-result-images">
          <img src="/images/image11.jpg" />
        </SwiperSlide>
        <SwiperSlide tag="div" className="service-result-images">
          <img src="/images/image12.jpg" />
        </SwiperSlide>
      </Swiper>

      <div className="section-contained-sm service-content-offers">
        <h2 className="text-lg text-center margin-bottom-mdx">
          El Servicio Incluye:
        </h2>
        {data.service_includes.map((item) => (
          <div className="service-content-offers-item" key={item}>
            <IconCheck size="2rem" color="#9287d2" /> <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
