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

// For GitHub Pages deployment
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/wsu-cs-homepage/intro' : ''

export default function ImageSlider() {
  return (
    <div className="shadow-xl rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="w-full h-[400px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={`${basePath}${src}`}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
