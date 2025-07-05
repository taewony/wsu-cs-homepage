import ImageSlider from "@/components/ImageSlider";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-800">우송대학교 컴퓨터공학과</h1>
          <nav>
            <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
              메인으로
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 md:p-8">
        <section className="text-center my-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 tracking-tight">
            나의 미래가 그려지는 곳
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            우송대학교 컴퓨터공학과에 오신 것을 환영합니다.
          </p>
        </section>

        <section className="mb-16">
          <ImageSlider />
        </section>

        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-800 mb-8">학과 활동 둘러보기</h3>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/d4qhuww_DVQ"
                title="학과 소개 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <footer className="text-center py-8 border-t border-slate-200">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Woosong University, Department of Computer Science.
          </p>
          <a
            href="https://cs.wsu.ac.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            학과 공식 홈페이지
          </a>
        </footer>
      </main>
    </div>
  )
}
