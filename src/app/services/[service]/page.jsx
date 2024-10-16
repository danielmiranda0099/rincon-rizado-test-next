"use client";
import { DollarIcon, IconCheck, IconClock } from "@/components/icons";
import "./styles.css";

import { ALL_SERVICE } from "@/placeholders/services";
import { SERVICE_DEFAULT } from "@/placeholders/services/default";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

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
          {data?.description?.length >= 1 && (
            <details>
              {data.description.map((description, index) => (
                <p key={index} className="service-banner-content-description">
                  {description}
                </p>
              ))}
              <summary className="text-smx2"></summary>
            </details>
          )}

          <div className="service-banner-price">
            <div className="service-banner-header">
              <DollarIcon size={"1.6rem"} />
              <p>Tarifa:</p>
            </div>
            <div className="service-banner-price-price">
              {data.price.split("%$%").map((price) => (
                <span key={price}>{price}</span>
              ))}
            </div>
          </div>
          <div className="service-banner-price">
            <div className="service-banner-header">
              <IconClock size={"1.6rem"} />
              <p>Tiempo estimado:</p>
            </div>
            <span>{data.time}</span>
          </div>

          {data?.other_service.map((service) => (
            <p className="text-md" key={service}>
              {service}
            </p>
          ))}

          {data.conditions && (
            <span className="service-conditions">*{data.conditions}</span>
          )}

          <button className="btn btn-primary">Agendar Servicio</button>
        </div>

        {/*<div className="service-banner-bg-content">
          <img src="/images/image-banner-without-gb.png" />
        </div>*/}
      </div>

      {/* <div className="section-contained-sm service-result-images">
        <img src="https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg" />
        <img src="https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg" />
        <img src="/images/image-banner-products-favorite.jpg" />
        <img src="https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg" />
      </div> */}

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

      <div className="divisor-layout-container">
        <div className="divisor-layout-item"></div>

        <div className="service-result-images-swiper-container">
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
              <Image
                src="/images/services/corte-forma/unnamed-7.jpg"
                width={200}
                height={200}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide tag="div" className="service-result-images">
              <Image
                src="/images/services/corte-forma/unnamed-2.jpg"
                width={200}
                height={200}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide tag="div" className="service-result-images">
              <Image
                src="/images/services/corte-forma/unnamed-3.jpg"
                width={200}
                height={200}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide tag="div" className="service-result-images">
              <Image
                src="/images/services/corte-forma/unnamed-4.jpg"
                width={200}
                height={200}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide tag="div" className="service-result-images">
              <Image
                src="/images/services/corte-forma/unnamed-5.jpg"
                width={200}
                height={200}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="divisor-layout-item"></div>
      </div>
    </section>
  );
}
