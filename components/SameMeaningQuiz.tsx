
import React, { useState, useEffect } from 'react';
import { SAME_MEANING_DATA } from '../samemeaning_data';
import { SameMeaningEntry } from '../types';
import { CheckCircle, XCircle, RefreshCw, ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SameMeaningQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<SameMeaningEntry | null>(null);
  const [options, setOptions] = useState<SameMeaningEntry[]>([]);
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

    const randomIndex = Math.floor(Math.random() * SAME_MEANING_DATA.length);
    const correctEntry = SAME_MEANING_DATA[randomIndex];
    
    // Generate 3 distractors
    const distractors: SameMeaningEntry[] = [];
    while (distractors.length < 3) {
      const rand = Math.floor(Math.random() * SAME_MEANING_DATA.length);
      if (rand !== randomIndex && !distractors.some(d => d.id === SAME_MEANING_DATA[rand].id)) {
        distractors.push(SAME_MEANING_DATA[rand]);
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

  const handleOptionClick = (option: SameMeaningEntry) => {
    if (selectedOption !== null || !currentQuestion) return; // Prevent multiple clicks

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
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center space-y-6 animate-fade-in border border-gray-200">
        <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
          <Trophy size={40} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Quiz Complete!</h2>
        <div className="space-y-2">
          <p className="text-gray-500">Your Score</p>
          <p className="text-5xl font-bold text-orange-600">{score} / {TOTAL_QUESTIONS}</p>
        </div>
        <div className="pt-4 space-y-3">
          <button 
            onClick={handleRestart}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} /> Play Again
          </button>
          <Link to="/same-meaning" className="block w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">
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
          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Q{questionCount}</span>
          Same Meaning Quiz
        </h2>
        <span className="font-mono text-gray-500">Score: {score}</span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center space-y-4">
        <p className="text-gray-500 text-sm uppercase tracking-widest">Find the synonym for</p>
        <h3 className="text-4xl font-bold text-gray-900 font-jp">{currentQuestion.word}</h3>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {options.map((option) => {
          let buttonStyle = "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
          
          if (selectedOption !== null) {
            if (option.id === currentQuestion.id) {
              buttonStyle = "bg-green-100 border-green-500 text-green-800 ring-1 ring-green-500";
            } else if (option.id === selectedOption) {
              buttonStyle = "bg-red-100 border-red-500 text-red-800 ring-1 ring-red-500";
            } else {
              buttonStyle = "bg-gray-50 border-gray-200 text-gray-400 opacity-50";
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
              className={`p-4 rounded-xl border-2 font-medium text-lg transition-all duration-200 flex justify-between items-center ${buttonStyle}`}
            >
              <span className="font-jp">{option.synonym}</span>
              {selectedOption !== null && option.id === currentQuestion.id && <CheckCircle size={20} className="text-green-600" />}
              {selectedOption !== null && option.id === selectedOption && option.id !== currentQuestion.id && <XCircle size={20} className="text-red-600" />}
            </button>
          );
        })}
      </div>

      {selectedOption !== null && (
        <div className="flex justify-end animate-fade-in">
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors flex items-center gap-2 shadow-lg shadow-orange-600/20"
          >
            Next Question <ArrowRight size={20} />
          </button>
        </div>
      )}
      
      {selectedOption !== null && (
         <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
            <p className="text-sm text-blue-600 font-medium mb-1">Meaning</p>
            <p className="text-blue-900 font-mm">{currentQuestion.meaningMM}</p>
         </div>
      )}
    </div>
  );
};
