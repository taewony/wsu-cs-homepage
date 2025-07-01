import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CurriculumSection from '@/components/CurriculumSection';
import CareerSection from '@/components/CareerSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import GraduateSection from '@/components/GraduateSection';
import QuizSection from '@/components/QuizSection';

import Header from '@/components/Header';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2025 Woosong University, Department of Computer Science. All Rights Reserved.</p>
      <p className="mt-2">대전광역시 동구 동대전로 171 우송대학교</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <CareerSection />
      <ActivitiesSection />
      <GraduateSection />
      <QuizSection />
      <Footer />
    </main>
  );
}