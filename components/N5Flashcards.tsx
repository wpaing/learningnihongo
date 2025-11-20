import React, { useState, useEffect } from 'react';
import { RotateCw, ArrowRight, ArrowLeft, Settings2 } from 'lucide-react';
import { VocabularyEntry } from '../types';

enum N5FlashcardMode {
  KANJI_TO_MEANING = 'KANJI_TO_MEANING',
  MEANING_TO_KANJI = 'MEANING_TO_KANJI'
}

interface FlashcardItem {
  front: string;
  backMain: string;
  backSub: string;
}

export const N5Flashcards = ({ data }: { data: VocabularyEntry[] }) => {
  const [mode, setMode] = useState<N5FlashcardMode>(N5FlashcardMode.KANJI_TO_MEANING);
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  // Initialize cards based on mode
  useEffect(() => {
    let newCards: FlashcardItem[] = [];

    if (mode === N5FlashcardMode.KANJI_TO_MEANING) {
      newCards = data.map(item => ({
        front: item.kanji,
        backMain: item.meaning,
        backSub: item.reading
      }));
    } else {
      newCards = data.map(item => ({
        front: item.meaning,
        backMain: item.kanji,
        backSub: item.reading
      }));
    }
    
    // Shuffle
    newCards = newCards.sort(() => Math.random() - 0.5);
    setCards(newCards);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [mode, data]);

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
      {/* Controls */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
            <Settings2 size={20} />
            <span>Mode:</span>
        </div>
        <select 
            value={mode} 
            onChange={(e) => setMode(e.target.value as N5FlashcardMode)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full sm:w-auto p-2.5"
        >
            <option value={N5FlashcardMode.KANJI_TO_MEANING}>Kanji → Meaning</option>
            <option value={N5FlashcardMode.MEANING_TO_KANJI}>Meaning → Kanji</option>
        </select>
        <div className="text-sm text-gray-500 font-mono bg-gray-100 px-3 py-1 rounded-md">
            {currentIndex + 1} / {cards.length}
        </div>
      </div>

      {/* Card Container */}
      <div className="relative h-96 w-full perspective-1000">
        <div 
            className={`relative w-full h-full duration-500 transform-style-3d cursor-pointer transition-all ${isFlipped ? 'rotate-y-180' : ''} ${direction !== 0 ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Front */}
            <div className="absolute w-full h-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 backface-hidden flex flex-col items-center justify-center p-8">
                <span className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-semibold">
                    {mode === N5FlashcardMode.KANJI_TO_MEANING ? 'Kanji' : 'Meaning'}
                </span>
                <h2 className={`font-bold text-gray-800 text-center mb-8 ${mode === N5FlashcardMode.KANJI_TO_MEANING ? 'text-7xl font-jp' : 'text-4xl font-mm'}`}>
                    {currentCard.front}
                </h2>
                <p className="text-gray-400 text-sm mt-auto">Tap to flip</p>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 text-white">
                 <span className="text-sm uppercase tracking-widest text-white/70 mb-4 font-semibold">
                    Answer
                </span>
                <h2 className={`font-bold text-white text-center leading-relaxed mb-4 ${mode === N5FlashcardMode.KANJI_TO_MEANING ? 'text-4xl font-mm' : 'text-7xl font-jp'}`}>
                    {currentCard.backMain}
                </h2>
                <p className="text-2xl text-emerald-100 font-jp font-medium bg-black/10 px-4 py-2 rounded-lg">
                    {currentCard.backSub}
                </p>
            </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-6">
        <button 
            onClick={handlePrev}
            className="p-4 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-emerald-600 transition-colors shadow-sm"
        >
            <ArrowLeft size={24} />
        </button>
        
        <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-600 rounded-xl font-medium hover:bg-emerald-100 transition-colors"
        >
            <RotateCw size={20} />
            <span>Flip Card</span>
        </button>

        <button 
            onClick={handleNext}
            className="p-4 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-emerald-600 transition-colors shadow-sm"
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