'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
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
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="cover"
              unoptimized // GitHub Pages 정적 export 시 필요
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
