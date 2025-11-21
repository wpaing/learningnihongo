
import React, { useState, useEffect, useCallback } from 'react';
import { RotateCw, Layers, Sparkles, Check, X } from 'lucide-react';
import { ADV_DATA } from '../adv_data';

enum AdvFlashcardMode {
  WORD_TO_MEANING = 'WORD_TO_MEANING',
  MEANING_TO_WORD = 'MEANING_TO_WORD'
}

interface FlashcardItem {
  front: string;
  backMain: string;
  backSub?: string;
}

export const AdvFlashcards = () => {
  const [mode, setMode] = useState<AdvFlashcardMode>(AdvFlashcardMode.WORD_TO_MEANING);
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  useEffect(() => {
    let newCards: FlashcardItem[] = [];
    if (mode === AdvFlashcardMode.WORD_TO_MEANING) {
      newCards = ADV_DATA.map(item => ({
        front: item.word,
        backMain: item.meaning,
        backSub: item.reading
      }));
    } else {
      newCards = ADV_DATA.map(item => ({
        front: item.meaning,
        backMain: item.word,
        backSub: item.reading
      }));
    }
    newCards = newCards.sort(() => Math.random() - 0.5);
    setCards(newCards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setFeedback(null);
  }, [mode]);

  const handleResult = useCallback((result: 'correct' | 'incorrect') => {
    setFeedback(result);
    setTimeout(() => {
        setIsFlipped(false);
        setFeedback(null);
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 500);
  }, [cards.length]);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFlipped && e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, handleFlip]);

  const currentCard = cards[currentIndex];
  if (!currentCard) return <div className="min-h-[400px] flex items-center justify-center text-slate-400 font-medium">Preparing deck...</div>;
  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
        <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <div className="p-2 bg-violet-100 text-violet-600 rounded-lg"><Layers size={20} /></div>
                Adverbs Deck
            </h2>
            <p className="text-slate-500 text-sm mt-1">N4/N5 Adverbs Practice</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            <select 
                value={mode} 
                onChange={(e) => setMode(e.target.value as AdvFlashcardMode)}
                className="bg-transparent border-0 text-slate-700 text-sm font-bold focus:ring-0 py-1.5 pl-3 pr-8 cursor-pointer"
            >
                <option value={AdvFlashcardMode.WORD_TO_MEANING}>Word → Meaning</option>
                <option value={AdvFlashcardMode.MEANING_TO_WORD}>Meaning → Word</option>
            </select>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div className="bg-violet-500 h-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>

      {/* 3D Card */}
      <div className="relative h-[420px] w-full perspective-1000">
        <div className={`relative w-full h-full duration-500 transform-style-3d transition-all ease-out ${isFlipped ? 'rotate-y-180' : ''} ${feedback === 'correct' ? 'translate-x-[120%] opacity-0 rotate-12' : ''} ${feedback === 'incorrect' ? '-translate-x-[120%] opacity-0 -rotate-12' : ''}`}>
            
            {/* FRONT */}
            <div 
                onClick={handleFlip}
                className="absolute inset-0 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100 backface-hidden flex flex-col items-center justify-center p-8 cursor-pointer hover:shadow-xl transition-shadow group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-violet-500"></div>
                <div className="absolute top-6 right-6 text-xs font-bold text-slate-300 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                    {currentIndex + 1} / {cards.length}
                </div>
                
                <div className="text-center space-y-8 z-10">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 bg-violet-50 px-3 py-1 rounded-full">
                        {mode === AdvFlashcardMode.WORD_TO_MEANING ? 'Adverb' : 'Definition'}
                    </span>
                    <h2 className={`font-bold text-slate-800 tracking-tight group-hover:scale-105 transition-transform duration-300 ${mode === AdvFlashcardMode.WORD_TO_MEANING ? 'text-5xl md:text-7xl font-jp' : 'text-3xl md:text-5xl font-mm'}`}>
                        {currentCard.front}
                    </h2>
                </div>
                
                <div className="absolute bottom-0 w-full p-6 flex justify-center bg-gradient-to-t from-white to-transparent pt-12">
                    <button className="text-slate-400 text-xs font-bold uppercase tracking-wider animate-pulse hover:text-violet-500 transition-colors">
                        Click to Flip
                    </button>
                </div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 bg-slate-900 rounded-3xl shadow-2xl backface-hidden rotate-y-180 flex flex-col border border-slate-700 overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full mix-blend-overlay filter blur-[80px] opacity-30 pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-[80px] opacity-30 pointer-events-none"></div>

                 {/* Visual Feedback */}
                 {feedback === 'correct' && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-green-500/20 backdrop-blur-[2px] animate-fade-in">
                        <div className="bg-white rounded-full p-6 shadow-2xl transform scale-110 transition-transform">
                            <Check size={48} className="text-green-500" strokeWidth={4} />
                        </div>
                    </div>
                 )}
                 {feedback === 'incorrect' && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-red-500/20 backdrop-blur-[2px] animate-fade-in">
                        <div className="bg-white rounded-full p-6 shadow-2xl transform scale-110 transition-transform">
                            <X size={48} className="text-red-500" strokeWidth={4} />
                        </div>
                    </div>
                 )}

                 <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 text-center w-full">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-violet-300 backdrop-blur-sm shadow-inner">
                        <Sparkles size={20} />
                    </div>
                    <h2 className={`font-bold text-white leading-relaxed mb-6 drop-shadow-md ${mode === AdvFlashcardMode.WORD_TO_MEANING ? 'text-3xl md:text-4xl font-mm' : 'text-5xl md:text-7xl font-jp'}`}>
                        {currentCard.backMain}
                    </h2>
                    {currentCard.backSub && (
                        <p className="text-lg text-violet-200 font-jp font-medium bg-white/10 px-5 py-2.5 rounded-xl border border-white/5 backdrop-blur-sm shadow-sm">
                            {currentCard.backSub}
                        </p>
                    )}
                </div>

                 {/* Result Actions (Bottom) */}
                 <div className="relative z-20 p-8 pb-10 flex items-center justify-center gap-8 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                    <button 
                        onClick={(e) => { e.stopPropagation(); handleResult('incorrect'); }} 
                        className="group flex flex-col items-center gap-2 outline-none"
                        title="Study Again"
                    >
                        <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 group-hover:bg-red-500 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-red-500/40 hover:scale-110 active:scale-95">
                            <X size={28} strokeWidth={3} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/60 group-hover:text-red-400 transition-colors">Again</span>
                    </button>

                    <button 
                        onClick={(e) => { e.stopPropagation(); handleFlip(); }} 
                        className="group flex flex-col items-center gap-2 outline-none"
                        title="Flip Back"
                    >
                        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 text-slate-400 group-hover:bg-violet-600 group-hover:border-violet-500 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-violet-500/40 hover:scale-110 active:scale-95">
                            <RotateCw size={20} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-violet-400 transition-colors">Flip</span>
                    </button>

                    <button 
                        onClick={(e) => { e.stopPropagation(); handleResult('correct'); }} 
                        className="group flex flex-col items-center gap-2 outline-none"
                        title="Got It"
                    >
                        <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 group-hover:bg-green-500 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-green-500/40 hover:scale-110 active:scale-95">
                            <Check size={28} strokeWidth={3} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-400/60 group-hover:text-green-400 transition-colors">Easy</span>
                    </button>
                 </div>
            </div>
        </div>
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
