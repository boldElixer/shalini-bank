'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './HeroCarousel.module.css';

const slides = [
  {
    id: 1,
    // Replace with your actual hero image
    src: "/chooseIcons/1.png", 
    alt: "Person using credit card on laptop",
  },
  {
    id: 2,
    src: "/chooseIcons/2.png",
    alt: "Financial growth concept",
  },
  {
    id: 3,
    src: "/chooseIcons/3.png",
    alt: "Secure online transactions",
  },
];

export default function HeroCarousel() {
  return (
    <section className={styles.carouselWrapper}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.imageContainer}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}