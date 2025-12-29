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
    src: "/heroCarousel/1.png", 
    alt: "Start your financial journey with SSB Bank",
  },
  {
    id: 2,
    src: "/heroCarousel/2.png",
    alt: "Open a Fixed Deposit Account Today",
  },
  {
    id: 3,
    src: "/heroCarousel/3.png",
    alt: "Debit Card for Convenient Banking",
  },
  {
    id: 4,
    src: "/heroCarousel/4.png",
    alt: "Mobile Banking Made Easy",
  }
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
                style={{ objectFit: 'contain' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}