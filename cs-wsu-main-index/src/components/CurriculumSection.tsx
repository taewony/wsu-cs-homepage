
import React from 'react';
import { curriculumData } from '@/data/mock';

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="section-container bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">교육과정</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curriculumData.map((course) => (
            <div key={course.name} className="card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{course.name}</h3>
              <p className="mt-2 text-gray-600">{course.year}학년 {course.semester}학기</p>
              <p className="mt-2 text-gray-600">{course.credits}학점</p>
              <span className={`mt-4 inline-block px-3 py-1 text-sm font-semibold rounded-full ${course.category === '전공필수' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'}`}>
                {course.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
