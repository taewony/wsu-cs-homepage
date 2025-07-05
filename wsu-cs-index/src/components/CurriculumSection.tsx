
import React from 'react';
import { curriculumData } from '@/data/mock';

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">교육과정</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {curriculumData.map((course) => (
            <div key={course.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-800">{course.name}</h3>
              <p className="mt-2 text-slate-500">{course.year}학년 {course.semester}학기</p>
              <p className="mt-2 text-slate-500">{course.credits}학점</p>
              <span className={`mt-4 inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                course.category === '전공필수' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-green-100 text-green-800'
              }`}>
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
