
import React from 'react';
import Header from '@/components/Header';
import CurriculumSection from '@/components/CurriculumSection';
import GuideSection from '@/components/GuideSection';

const DepartmentIntroPage = () => {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">학과소개</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">학부장 인사말</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          안녕하십니까? 우송대학교 컴퓨터공학과 학부장입니다.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          우리 컴퓨터공학과는 4차 산업혁명 시대를 선도하는 창의적이고 혁신적인 인재 양성을 목표로 합니다.
          최고의 교육 환경과 실무 중심의 커리큘럼을 통해 학생들이 미래 사회의 핵심 역량을 갖출 수 있도록 지원하고 있습니다.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          끊임없이 변화하는 IT 트렌드에 발맞춰 인공지능, 빅데이터, 클라우드 컴퓨팅, 사물 인터넷 등
          다양한 분야의 전문 지식을 습득하고 실질적인 프로젝트 경험을 쌓을 수 있도록 최선을 다하고 있습니다.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          학생 여러분의 꿈과 열정을 응원하며, 미래를 함께 만들어갈 여러분을 환영합니다.
        </p>
        <p className="text-right text-gray-700 font-semibold mt-8">
          우송대학교 컴퓨터공학과 학부장
        </p>
      </div>
      <CurriculumSection />
      <GuideSection />
    </main>
    </div>
  );
};

export default DepartmentIntroPage;
