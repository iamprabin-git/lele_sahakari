'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { CAROUSEL_IMAGES } from '@/constants/carasoulImages';


export default function Carousel() {
  return (
    <div className="w-full max-w-8xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-xl overflow-hidden"
      >
        {CAROUSEL_IMAGES.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={1000}
              className="object-contain pt-25 pb-10 w-full h-120"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
