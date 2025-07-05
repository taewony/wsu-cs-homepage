
import React from 'react';
import { graduateStoriesData } from '@/data/mock';

const GraduateSection = () => {
  return (
    <section id="graduates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">취업 이야기</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {graduateStoriesData.map((story) => (
            <div key={story.name} className="bg-slate-50 p-8 rounded-lg">
              <blockquote className="border-l-4 border-blue-500 pl-6">
                <p className="text-lg text-slate-700 italic">"{story.message}"</p>
              </blockquote>
              <div className="mt-4 text-right">
                <p className="font-semibold text-slate-800">- {story.name}, {story.year}년 졸업</p>
                <p className="text-slate-500">{story.company} {story.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraduateSection;
