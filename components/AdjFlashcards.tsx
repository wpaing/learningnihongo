
import React, { useState, useEffect } from 'react';
import { RotateCw, ArrowRight, ArrowLeft, Settings2 } from 'lucide-react';
import { ADJ_DATA } from '../adj_data';

enum AdjFlashcardMode {
  WORD_TO_MEANING = 'WORD_TO_MEANING',
  MEANING_TO_WORD = 'MEANING_TO_WORD'
}

interface FlashcardItem {
  front: string;
  backMain: string;
  backSub: string;
  tag: string;
}

export const AdjFlashcards = () => {
  const [mode, setMode] = useState<AdjFlashcardMode>(AdjFlashcardMode.WORD_TO_MEANING);
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    let newCards: FlashcardItem[] = [];

    if (mode === AdjFlashcardMode.WORD_TO_MEANING) {
      newCards = ADJ_DATA.map(item => ({
        front: item.word,
        backMain: item.meaning,
        backSub: item.reading,
        tag: `${item.level} ${item.type}-adj`
      }));
    } else {
      newCards = ADJ_DATA.map(item => ({
        front: item.meaning,
        backMain: item.word,
        backSub: item.reading,
        tag: `${item.level} ${item.type}-adj`
      }));
    }
    
    newCards = newCards.sort(() => Math.random() - 0.5);
    setCards(newCards);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [mode]);

  const handleNext = () => {
    setIsFlipped(false);
    setDirection(1);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
        setDirection(0);
    }, 200);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setDirection(-1);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
        setDirection(0);
    }, 200);
  };

  const currentCard = cards[currentIndex];

  if (!currentCard) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
            <Settings2 size={20} />
            <span>Mode:</span>
        </div>
        <select 
            value={mode} 
            onChange={(e) => setMode(e.target.value as AdjFlashcardMode)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full sm:w-auto p-2.5"
        >
            <option value={AdjFlashcardMode.WORD_TO_MEANING}>Word → Meaning</option>
            <option value={AdjFlashcardMode.MEANING_TO_WORD}>Meaning → Word</option>
        </select>
        <div className="text-sm text-gray-500 font-mono bg-gray-100 px-3 py-1 rounded-md">
            {currentIndex + 1} / {cards.length}
        </div>
      </div>

      <div className="relative h-96 w-full perspective-1000">
        <div 
            className={`relative w-full h-full duration-500 transform-style-3d cursor-pointer transition-all ${isFlipped ? 'rotate-y-180' : ''} ${direction !== 0 ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="absolute w-full h-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 backface-hidden flex flex-col items-center justify-center p-8 text-center">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-bold bg-gray-100 px-3 py-1 rounded-full">
                    {currentCard.tag}
                </span>
                <h2 className={`font-bold text-gray-800 mb-8 ${mode === AdjFlashcardMode.WORD_TO_MEANING ? 'text-6xl font-jp' : 'text-4xl font-mm'}`}>
                    {currentCard.front}
                </h2>
                <p className="text-gray-400 text-sm mt-auto">Tap card to flip</p>
            </div>

            <div className="absolute w-full h-full bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 text-white text-center">
                 <span className="text-xs uppercase tracking-widest text-white/70 mb-6 font-bold">
                    Answer
                </span>
                <h2 className={`font-bold text-white leading-relaxed mb-6 ${mode === AdjFlashcardMode.WORD_TO_MEANING ? 'text-4xl font-mm' : 'text-6xl font-jp'}`}>
                    {currentCard.backMain}
                </h2>
                <p className="text-2xl text-pink-100 font-jp font-medium bg-black/10 px-6 py-2 rounded-xl">
                    {currentCard.backSub}
                </p>
            </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6">
        <button 
            onClick={handlePrev}
            className="p-4 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-pink-600 transition-colors shadow-sm"
        >
            <ArrowLeft size={24} />
        </button>
        
        <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-2 px-8 py-3 bg-pink-50 text-pink-600 rounded-xl font-bold hover:bg-pink-100 transition-colors"
        >
            <RotateCw size={20} />
            <span>Flip</span>
        </button>

        <button 
            onClick={handleNext}
            className="p-4 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-pink-600 transition-colors shadow-sm"
        >
            <ArrowRight size={24} />
        </button>
      </div>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};
