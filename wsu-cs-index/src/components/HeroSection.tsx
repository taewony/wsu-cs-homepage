
'use client';

import { useState, useEffect } from 'react';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/wsu-cs-homepage' : '';
const heroImage = `${basePath}/images/image3.jpg`;

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = '나의 미래가 그려지는 곳';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 150);
    return () => clearInterval(typing);
  }, []);

  return (
    <section 
      className="relative text-white text-center flex items-center justify-center h-[60vh] bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          {text}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-slate-200">
          우송대학교 컴퓨터공학과
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
