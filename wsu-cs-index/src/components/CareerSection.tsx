
import React from 'react';
import { careerPathData } from '@/data/mock';

const CareerSection = () => {
  return (
    <section id="career" className="section-container py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">졸업 후 진로</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careerPathData.map((career) => (
            <div key={career.title} className="card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">{career.title}</h3>
              <p className="mt-2 text-gray-700">{career.description}</p>
              <div className="mt-4">
                <h4 className="font-bold">주요 취업 기업:</h4>
                <p>{career.companies.join(', ')}</p>
              </div>
              <div className="mt-4">
                <h4 className="font-bold">필요 역량:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {career.skills.map(skill => (
                    <span key={skill} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
