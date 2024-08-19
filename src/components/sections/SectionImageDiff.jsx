'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { ImageDiff } from '..';

import './section-image-diff.css';

export function SectionImageDiff() {
  return (
    <div className='section-contained-sm image-diff-container'>
      <div className='image-diff-header'>
      <h2>Mira alguno de nuestros resultados</h2>
      <p>
      Nuestra especialidad es el cuidado capilar y estética de los cabellos afro rizados, 
      buscamos que te sientas orgullosa y segura de lucir tu cabello natural con confianza.
      </p>
      </div>
     <div>
     <Swiper
        navigation={true}
        slidesPerView={1}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="swiper-image-diff"
      >
        <SwiperSlide className='swiper-item'>
        <ImageDiff images={['https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg', 'https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg']} />
        </SwiperSlide>
        <SwiperSlide className='swiper-item'>
        <ImageDiff images={['images/Screenshot from 2023-10-13 16-26-27 (copy).png', 'images/Screenshot from 2023-10-13 16-28-18 (copy).png']} />
        </SwiperSlide>
        <SwiperSlide className='swiper-item'>
        <ImageDiff images={['https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg', 'https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg']} />
        </SwiperSlide>
      </Swiper>
     </div>
    </div>
  );
}

