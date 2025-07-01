
import React from 'react';

const GuideSection = () => {
  return (
    <section id="guide" className="section-container bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">입학안내</h2>
        <div className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          <p className="mb-4">우송대학교 컴퓨터공학과에 오신 것을 환영합니다. 저희 학과는 미래 IT 산업을 이끌어갈 인재를 양성하기 위해 최선을 다하고 있습니다.</p>
          <h3 className="text-2xl font-semibold mb-3">1. 모집 시기</h3>
          <ul className="list-disc list-inside mb-4">
            <li>수시 모집: 매년 9월 ~ 11월</li>
            <li>정시 모집: 매년 12월 ~ 1월</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-3">2. 지원 자격</h3>
          <ul className="list-disc list-inside mb-4">
            <li>고등학교 졸업(예정)자 또는 법령에 의하여 이와 동등 이상의 학력이 있다고 인정된 자</li>
            <li>각 전형별 세부 지원 자격은 모집 요강을 참고하시기 바랍니다.</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-3">3. 전형 방법</h3>
          <ul className="list-disc list-inside mb-4">
            <li>학생부 종합 전형, 학생부 교과 전형, 실기 위주 전형 등 다양한 전형으로 신입생을 선발합니다.</li>
            <li>자세한 내용은 입학처 홈페이지를 확인해 주세요.</li>
          </ul>
          <p className="text-center mt-8">
            <a href="https://ent.wsu.ac.kr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
              우송대학교 입학처 바로가기
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
