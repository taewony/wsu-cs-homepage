import ImageSlider from "@/components/ImageSlider"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-4">
      <div className="w-full max-w-6xl">
        <ImageSlider />

        <h1 className="text-4xl font-bold mt-8 text-gray-900">
          나의 미래가 그려지는 곳
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          우송대학교 컴퓨터공학과에 오신 것을 환영합니다.
        </p>

        <a
          href="https://cs.wsu.ac.kr"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          컴퓨터공학전공 홈페이지 바로가기
        </a>

        <div className="mt-10 w-full aspect-video max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/watch?v=d4qhuww_DVQ" // 실제 학과 영상 ID로 바꿔주세요
            title="학과 소개 영상"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  )
}
