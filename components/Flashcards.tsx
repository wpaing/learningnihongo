
import React, { useState, useEffect } from 'react';
import { RotateCw, ArrowRight, ArrowLeft, Settings2 } from 'lucide-react';
import { KanjiEntry, FlashcardMode } from '../types';

interface FlashcardItem {
    front: string;
    backMain: string;
    backSub?: string;
    type: 'kanji' | 'compound';
}

export const Flashcards = ({ data }: { data: KanjiEntry[] }) => {
  const [mode, setMode] = useState<FlashcardMode>(FlashcardMode.COMPOUND_TO_MEANING);
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  // Initialize cards based on mode
  useEffect(() => {
    let newCards: FlashcardItem[] = [];

    if (mode === FlashcardMode.KANJI_TO_READING) {
      newCards = data.map(k => ({
        front: k.kanji,
        backMain: `${k.onReading} / ${k.kunReading}`,
        backSub: "On / Kun Readings",
        type: 'kanji'
      }));
    } else if (mode === FlashcardMode.COMPOUND_TO_MEANING) {
      data.forEach(k => {
        k.compounds.forEach(c => {
          newCards.push({
            front: c.word,
            backMain: c.meaningMM,
            backSub: c.reading,
            type: 'compound'
          });
        });
      });
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

  if (!currentCard) return <div className="p-10 text-center text-slate-400">Loading flashcards...</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Controls */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 text-slate-700 font-bold text-sm uppercase tracking-wide">
            <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
                <Settings2 size={18} />
            </div>
            <span>Study Mode:</span>
        </div>
        <select 
            value={mode} 
            onChange={(e) => setMode(e.target.value as FlashcardMode)}
            className="bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-auto p-2.5 px-4"
        >
            <option value={FlashcardMode.COMPOUND_TO_MEANING}>Word → Meaning</option>
            <option value={FlashcardMode.KANJI_TO_READING}>Kanji → Readings</option>
        </select>
        <div className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100">
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
            <div className="absolute w-full h-full bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 backface-hidden flex flex-col items-center justify-center p-8 group">
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-indigo-400 transition-colors"></div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300 mb-8">
                    {currentCard.type === 'kanji' ? 'Kanji Character' : 'Vocabulary'}
                </span>
                <h2 className="text-7xl font-bold text-slate-800 font-jp text-center mb-10 tracking-wider">
                    {currentCard.front}
                </h2>
                <div className="mt-auto flex flex-col items-center gap-2">
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Tap to reveal</p>
                    <div className="w-12 h-1 bg-slate-100 rounded-full group-hover:bg-indigo-100 transition-colors"></div>
                </div>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2rem] shadow-[0_20px_50px_rgba(79,70,229,0.3)] backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 text-white border border-indigo-500/50">
                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200/70 mb-8">
                    Definition
                </span>
                <h2 className="text-4xl font-bold text-white font-mm text-center leading-relaxed mb-6">
                    {currentCard.backMain}
                </h2>
                {currentCard.backSub && (
                    <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
                        <p className="text-xl text-indigo-50 font-jp font-medium">
                            {currentCard.backSub}
                        </p>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-6 pt-4">
        <button 
            onClick={handlePrev}
            className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:bg-white hover:text-indigo-600 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
            <ArrowLeft size={24} />
        </button>
        
        <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-slate-200"
        >
            <RotateCw size={20} />
            <span>Flip Card</span>
        </button>

        <button 
            onClick={handleNext}
            className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:bg-white hover:text-indigo-600 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
