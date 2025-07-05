
import React from 'react';
import { careerPathData } from '@/data/mock';

const CareerSection = () => {
  return (
    <section id="career" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">졸업 후 진로</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careerPathData.map((career) => (
            <div key={career.title} className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-slate-800">{career.title}</h3>
              <p className="mt-2 text-slate-600">{career.description}</p>
              <div className="mt-6">
                <h4 className="font-semibold text-slate-700">주요 취업 기업:</h4>
                <p className="text-slate-600">{career.companies.join(', ')}</p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-slate-700">필요 역량:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {career.skills.map(skill => (
                    <span key={skill} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
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
