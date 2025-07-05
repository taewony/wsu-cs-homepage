import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CurriculumSection from '@/components/CurriculumSection';
import CareerSection from '@/components/CareerSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import GraduateSection from '@/components/GraduateSection';
import QuizSection from '@/components/QuizSection';

import Header from '@/components/Header';

const Footer = () => (
  <footer className="text-center py-8 border-t border-slate-200 bg-slate-50">
    <div className="container mx-auto">
      <p className="text-slate-500">
        © {new Date().getFullYear()} Woosong University, Department of Computer Science.
      </p>
      <p className="mt-2 text-sm text-slate-400">
        대전광역시 동구 동대전로 171 우송대학교
      </p>
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