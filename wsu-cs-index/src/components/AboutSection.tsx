
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          학과 소개
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
          우송대학교 컴퓨터공학과는 4차 산업혁명을 선도할 창의적인 IT 인재를 양성합니다.
          최신 기술 트렌드를 반영한 체계적인 교육과정과 실무 중심의 프로젝트를 통해
          미래 사회가 요구하는 핵심 역량을 갖춘 전문가로 성장할 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
