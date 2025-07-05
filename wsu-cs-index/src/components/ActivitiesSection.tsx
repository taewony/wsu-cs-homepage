'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Navigation 추가
import { activitiesData } from '@/data/mock';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Navigation CSS 추가

const ActivitiesSection = () => {
  return (
    <section id="activities" className="section-container bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">나의 미래를 확인하는 곳: 학과 활동</h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]} // Navigation 모듈 추가
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true} // Navigation 활성화
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-12" // Add padding-bottom for pagination
        >
          {activitiesData.map((activity) => (
            <SwiperSlide key={activity.title} className="h-full">
              <div className="card bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <img 
                    src={activity.imageURL} 
                    alt={activity.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // 이미지 로드 실패 시 대체 이미지 표시
                      e.currentTarget.src = `https://placehold.co/400x300/e2e8f0/4a5568?text=Image+Not+Found`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* 오버레이 추가 */}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                  <p className="mt-2 text-gray-600 flex-grow">{activity.description}</p>
                  <span className="mt-4 inline-block bg-indigo-200 text-indigo-800 px-3 py-1 text-sm font-semibold rounded-full self-start">{activity.category}</span>
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