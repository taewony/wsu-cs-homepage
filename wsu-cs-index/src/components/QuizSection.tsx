
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
    const yesCount = Object.values(answers).filter(answer => answer).length;
    if (yesCount >= 3) {
      setResult("당신은 컴퓨터공학이 적성에 잘 맞을 것 같아요! 🚀");
    } else {
      setResult("괜찮아요! 컴퓨터공학은 다양한 분야와 연결될 수 있어요. 😊");
    }
  };

  return (
    <section id="quiz" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">컴퓨터공학은 내 적성과 맞을까?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            간단한 질문에 답하고 컴퓨터공학 적성을 확인해보세요.
          </p>
        </div>
        
        {!result ? (
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {questions.map(q => (
                <div key={q.id} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <p className="text-xl text-slate-800 mb-4">{q.question}</p>
                  <div className="space-x-4">
                    <button 
                      onClick={() => handleAnswer(q.id, true)}
                      className={`py-2 px-8 rounded-full font-semibold transition-colors ${answers[q.id] === true ? 'bg-blue-600 text-white scale-105' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                    >
                      YES
                    </button>
                    <button 
                      onClick={() => handleAnswer(q.id, false)}
                      className={`py-2 px-8 rounded-full font-semibold transition-colors ${answers[q.id] === false ? 'bg-red-600 text-white scale-105' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}
                    >
                      NO
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={showResult} 
              disabled={!allAnswered}
              className={`mt-10 py-3 px-10 rounded-full text-xl font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105 ${allAnswered ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'}`}
            >
              결과 보기
            </button>
          </div>
        ) : (
          <div className="bg-white p-10 rounded-lg shadow-xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-blue-600">{result}</h3>
            <button onClick={() => { setResult(null); setAnswers({}); }} className="mt-8 bg-slate-500 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
              다시하기
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
