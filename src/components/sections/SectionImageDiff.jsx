'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import './section-image-diff.css';
import { ImageDiff } from '..';

export function SectionImageDiff() {
  return (
    <div className='section-contained-lg image-diff-container'>
      <h2>Mira Nuestro Resultados, Nuestros Procesos Son Los Mejores</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos incidunt velit tenetur doloribus eaque.</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.7,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={1}
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
  );
}

