
'use client';

import { useState, useEffect } from 'react';

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
    <section className="hero-section bg-cover bg-center bg-fixed text-white text-center py-60" style={{ backgroundImage: 'url(/images/image3.jpg)' }}>
      <div className="container mx-auto">
        <div className="bg-blue-500/70 p-4 rounded-lg mx-auto w-fit">
          <h1 className="text-8xl font-bold typing-effect mb-2">{text}</h1>
          <p className="mt-2 text-3xl">우송대학교 컴퓨터공학과</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
