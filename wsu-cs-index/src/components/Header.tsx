
import React from 'react';
import Link from 'next/link';

const isProd = process.env.NODE_ENV === 'production';
const introPath = isProd ? '/wsu-cs-homepage/intro' : '/intro';

const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-slate-800">
        우송대학교 컴퓨터공학과
      </Link>
      <nav className="hidden md:flex space-x-2">
        <Link href={`${introPath}`} className="py-2 px-3 text-slate-600 hover:text-blue-600 transition-colors rounded">
          학과소개
        </Link>
        <Link href="#curriculum" className="py-2 px-3 text-slate-600 hover:text-blue-600 transition-colors rounded">
          교육과정
        </Link>
        <Link href="#activities" className="py-2 px-3 text-slate-600 hover:text-blue-600 transition-colors rounded">
          학과활동
        </Link>
        <Link href="#graduates" className="py-2 px-3 text-slate-600 hover:text-blue-600 transition-colors rounded">
          취업이야기
        </Link>
        <Link href="#quiz" className="py-2 px-3 text-slate-600 hover:text-blue-600 transition-colors rounded">
          적성체크
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
