
import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-3">
      <div className="flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">우송대학교 컴퓨터공학과</a>
        <div className="hidden md:flex space-x-4">
          <a href="/department-intro" className="py-2 px-3 hover:bg-gray-200 rounded">학과소개</a>
          <a href="/department-intro#curriculum" className="py-2 px-3 hover:bg-gray-200 rounded">교육과정</a>
          <a href="/department-intro#guide" className="py-2 px-3 hover:bg-gray-200 rounded">입학안내</a>
          <a href="/#activities" className="py-2 px-3 hover:bg-gray-200 rounded">학과활동</a>
          <a href="/#graduates" className="py-2 px-3 hover:bg-gray-200 rounded">취업이야기</a>
          <a href="/#quiz" className="py-2 px-3 hover:bg-gray-200 rounded">적성체크</a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
