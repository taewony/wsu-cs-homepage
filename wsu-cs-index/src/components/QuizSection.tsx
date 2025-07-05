
'use client';

import React, { useState } from 'react';

const questions = [
  { id: 1, question: '새로운 기술을 배우는 것에 흥미가 많다.' },
  { id: 2, question: '논리적인 문제 해결을 즐긴다.' },
  { id: 3, question: '컴퓨터와 관련된 활동에 시간을 보내는 것을 좋아한다.' },
  { id: 4, question: '복잡한 시스템을 이해하고 분석하는 것에 관심이 있다.' },
];

const QuizSection = () => {
  const [answers, setAnswers] = useState<{ [key: number]: boolean | null }>({});
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (id: number, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: answer }));
  };

  const allAnswered = questions.every(q => answers[q.id] !== undefined && answers[q.id] !== null);

  const showResult = () => {
    setResult("당신은 컴퓨터공학이 적성에 맞습니다!");
  };

  return (
    <section id="quiz" className="section-container bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">컴퓨터공학은 내 적성과 맞을까?</h2>
        <p className="mb-10">간단한 질문에 답하고 컴퓨터공학 적성을 확인해보세요.</p>
        
        {!result ? (
          <div className="space-y-6">
            {questions.map(q => (
              <div key={q.id} className="card bg-white p-6 rounded-lg shadow-md">
                <p className="text-xl mb-4">{q.question}</p>
                <div className="space-x-4">
                  <button 
                    onClick={() => handleAnswer(q.id, true)}
                    className={`py-2 px-6 rounded-full font-semibold ${answers[q.id] === true ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800 hover:bg-blue-300'}`}
                  >
                    YES
                  </button>
                  <button 
                    onClick={() => handleAnswer(q.id, false)}
                    className={`py-2 px-6 rounded-full font-semibold ${answers[q.id] === false ? 'bg-red-600 text-white' : 'bg-red-200 text-red-800 hover:bg-red-300'}`}
                  >
                    NO
                  </button>
                </div>
              </div>
            ))}
            <button 
              onClick={showResult} 
              disabled={!allAnswered}
              className={`mt-8 py-3 px-8 rounded-full text-xl font-bold transition duration-300 ease-in-out ${allAnswered ? 'bg-green-500 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              결과 보기
            </button>
          </div>
        ) : (
          <div className="card bg-white p-10 rounded-lg shadow-xl">
            <h3 className="text-4xl font-bold text-indigo-600">{result}</h3>
            <button onClick={() => { setResult(null); setAnswers({}); }} className="mt-8 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded">다시하기</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
