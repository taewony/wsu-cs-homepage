import ImageSlider from "@/components/ImageSlider";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mt-8 text-gray-900">
          나의 미래가 그려지는 곳
        </h1>
        <p className="text-lg mt-4 mb-8 text-gray-600">
          우송대학교 컴퓨터공학과에 오신 것을 환영합니다.
        </p>

        <ImageSlider />

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            메인 페이지로
          </Link>
          <a
            href="https://cs.wsu.ac.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            컴퓨터공학전공 홈페이지 (새 창)
          </a>
        </div>

        <div className="mt-10 w-full aspect-video max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/d4qhuww_DVQ" // embed URL로 변경
            title="학과 소개 영상"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  )
}
