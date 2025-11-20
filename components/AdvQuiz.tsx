
import React, { useState, useEffect } from 'react';
import { ADV_DATA } from '../adv_data';
import { AdverbEntry } from '../types';
import { CheckCircle, XCircle, RefreshCw, ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdvQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<AdverbEntry | null>(null);
  const [options, setOptions] = useState<AdverbEntry[]>([]);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const TOTAL_QUESTIONS = 10;

  const generateQuestion = () => {
    if (questionCount >= TOTAL_QUESTIONS) {
      setGameOver(true);
      return;
    }

    const randomIndex = Math.floor(Math.random() * ADV_DATA.length);
    const correctEntry = ADV_DATA[randomIndex];
    
    // Generate 3 distractors
    const distractors: AdverbEntry[] = [];
    while (distractors.length < 3) {
      const rand = Math.floor(Math.random() * ADV_DATA.length);
      if (rand !== randomIndex && !distractors.some(d => d.id === ADV_DATA[rand].id)) {
        distractors.push(ADV_DATA[rand]);
      }
    }

    const allOptions = [correctEntry, ...distractors].sort(() => Math.random() - 0.5);

    setCurrentQuestion(correctEntry);
    setOptions(allOptions);
    setSelectedOption(null);
    setIsCorrect(null);
    setQuestionCount(prev => prev + 1);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleOptionClick = (option: AdverbEntry) => {
    if (selectedOption !== null || !currentQuestion) return;

    setSelectedOption(option.id);
    const correct = option.id === currentQuestion.id;
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    generateQuestion();
  };

  const handleRestart = () => {
    setScore(0);
    setQuestionCount(0);
    setGameOver(false);
    generateQuestion();
  };

  if (gameOver) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8 text-center space-y-8 animate-fade-in border border-gray-100 mt-10">
        <div className="w-24 h-24 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-violet-50">
          <Trophy size={48} />
        </div>
        <div>
            <h2 className="text-3xl font-bold text-gray-900">Quiz Complete!</h2>
            <p className="text-gray-500 mt-2">Great job practicing adverbs.</p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6">
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Final Score</p>
          <p className="text-6xl font-bold text-violet-600 mt-2">{score} <span className="text-2xl text-gray-400">/ {TOTAL_QUESTIONS}</span></p>
        </div>

        <div className="pt-2 space-y-3">
          <button 
            onClick={handleRestart}
            className="w-full py-4 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-all hover:shadow-lg hover:shadow-violet-200 flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} /> Play Again
          </button>
          <Link to="/adv-list" className="block w-full py-4 bg-white text-gray-700 rounded-xl font-bold hover:bg-gray-50 border border-gray-200 transition-colors">
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-lg mx-auto space-y-6 animate-fade-in">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-lg text-sm font-bold">Q{questionCount}</span>
          Adverb Quiz
        </h2>
        <span className="font-mono text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-lg">Score: {score}</span>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10 text-center space-y-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
            <div className="h-full bg-violet-500 transition-all duration-500" style={{ width: `${(questionCount / TOTAL_QUESTIONS) * 100}%` }}></div>
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">What is the meaning of?</p>
        <h3 className="text-5xl font-bold text-gray-800 font-jp py-4">{currentQuestion.word}</h3>
        {currentQuestion.reading && <p className="text-violet-500 font-medium font-jp text-lg">{currentQuestion.reading}</p>}
      </div>

      <div className="grid grid-cols-1 gap-3">
        {options.map((option) => {
          let buttonStyle = "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 shadow-sm";
          
          if (selectedOption !== null) {
            if (option.id === currentQuestion.id) {
              buttonStyle = "bg-green-50 border-green-500 text-green-800 ring-2 ring-green-500 shadow-md";
            } else if (option.id === selectedOption) {
              buttonStyle = "bg-red-50 border-red-500 text-red-800 ring-2 ring-red-500 shadow-md";
            } else {
              buttonStyle = "bg-gray-50 border-gray-100 text-gray-400 opacity-50";
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
              className={`p-5 rounded-2xl border-2 font-medium text-lg transition-all duration-200 flex justify-between items-center ${buttonStyle}`}
            >
              <span className="font-mm">{option.meaning}</span>
              {selectedOption !== null && option.id === currentQuestion.id && <CheckCircle size={24} className="text-green-600" />}
              {selectedOption !== null && option.id === selectedOption && option.id !== currentQuestion.id && <XCircle size={24} className="text-red-600" />}
            </button>
          );
        })}
      </div>

      {selectedOption !== null && (
        <div className="flex justify-end animate-fade-in pb-6">
          <button
            onClick={handleNext}
            className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-200"
          >
            Next Question <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
