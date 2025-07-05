'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { activitiesData } from '@/data/mock';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/wsu-cs-homepage' : '';

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">나의 미래를 확인하는 곳: 학과 활동</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="pb-12"
        >
          {activitiesData.map((activity) => (
            <SwiperSlide key={activity.title} className="h-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group">
                <div className="relative h-56 w-full">
                  <Image
                    src={`${basePath}${activity.imageURL}`}
                    alt={activity.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800">{activity.title}</h3>
                  <p className="mt-2 text-slate-600 flex-grow">{activity.description}</p>
                  <span className="mt-4 inline-block bg-indigo-100 text-indigo-800 px-3 py-1 text-sm font-semibold rounded-full self-start">
                    {activity.category}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ActivitiesSection;