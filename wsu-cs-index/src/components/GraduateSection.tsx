
import React from 'react';
import { graduateStoriesData } from '@/data/mock';

const GraduateSection = () => {
  return (
    <section id="graduates" className="section-container py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">취업 이야기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {graduateStoriesData.map((story) => (
            <div key={story.name} className="card bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg italic">"{story.message}"</p>
              <div className="mt-4 text-right">
                <p className="font-bold">- {story.name}, {story.year}년 졸업</p>
                <p className="text-gray-600">{story.company} {story.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraduateSection;
