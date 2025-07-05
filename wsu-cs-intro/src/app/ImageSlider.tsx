'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  '/homepage/image1.jpg',
  '/homepage/image2.jpg',
  '/homepage/image3.jpg',
  '/homepage/image4.jpg',
]

export default function ImageSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000 }}
      className="w-full h-[400px] rounded-lg overflow-hidden"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
