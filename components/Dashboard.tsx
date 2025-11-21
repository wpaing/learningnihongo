
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, WalletCards, Trophy, ArrowRight, Star, Zap, Book, BookCopy, TrendingUp, Clock, Target } from 'lucide-react';
import { KANJI_DATA } from '../data';
import { N5_DATA } from '../n5_data';
import { useProgress } from '../contexts/ProgressContext';

export const Dashboard = () => {
  const { getStats } = useProgress();
  const stats = getStats();

  // Calculate Totals
  const totalN4Kanji = KANJI_DATA.length;
  const totalN5Kanji = N5_DATA.length;

  const [wordOfDay, setWordOfDay] = useState<any>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // 1. Persistent Word of the Day Logic
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('word_of_day_date');
    const storedIndex = localStorage.getItem('word_of_day_index');

    let selectedKanji;

    if (storedDate === today && storedIndex) {
        // Use stored word if it's the same day
        selectedKanji = KANJI_DATA[parseInt(storedIndex)];
    } else {
        // Generate new word and save
        const newIndex = Math.floor(Math.random() * KANJI_DATA.length);
        selectedKanji = KANJI_DATA[newIndex];
        localStorage.setItem('word_of_day_date', today);
        localStorage.setItem('word_of_day_index', newIndex.toString());
    }

    if (selectedKanji && selectedKanji.compounds.length > 0) {
        setWordOfDay({
            kanji: selectedKanji.kanji,
            word: selectedKanji.compounds[0].word,
            meaning: selectedKanji.compounds[0].meaningMM,
            reading: selectedKanji.compounds[0].reading
        });
    }

    // 2. Load Streak from LocalStorage (simple mock implementation for now)
    const storedStreak = localStorage.getItem('study_streak');
    setStreak(storedStreak ? parseInt(storedStreak) : 3); 
  }, []);

  // Calculate percentages
  const n4Progress = Math.round((stats.n4Mastered / totalN4Kanji) * 100) || 0;
  const n5Progress = Math.round((stats.n5Mastered / totalN5Kanji) * 100) || 0;

  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 animate-slide-up">
        <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              <span className="text-gradient">Dashboard</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-mm text-base md:text-lg opacity-0 animate-slide-up delay-100" style={{ animationFillMode: 'forwards' }}>
                သင်၏ ဂျပန်စာလေ့လာမှု ခရီးစဉ်
            </p>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 opacity-0 animate-slide-up delay-200" style={{ animationFillMode: 'forwards' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300">Active Session</span>
        </div>
      </div>

      {/* Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 opacity-0 animate-slide-up delay-300" style={{ animationFillMode: 'forwards' }}>
        {/* Main Progress Card - Modern Gradient */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#818CF8] dark:from-indigo-900 dark:via-indigo-800 dark:to-indigo-900 rounded-[2rem] p-6 md:p-8 text-white shadow-xl shadow-indigo-200/50 dark:shadow-none relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl transition-transform group-hover:scale-110 duration-1000 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between gap-6">
                <div>
                    <div className="flex justify-between items-start mb-6 md:mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                                <TrendingUp size={14} className="text-yellow-300" /> Learning Statistics
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight">Your Mastery<br/>Progress</h2>
                        </div>
                        <div className="text-right hidden sm:block">
                            <div className="text-3xl md:text-4xl font-bold flex items-center gap-1 justify-end">
                                {streak} <span className="text-base md:text-lg text-indigo-200 font-medium">days</span>
                            </div>
                            <p className="text-indigo-200 text-xs uppercase tracking-wider font-bold">Current Streak</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-2">
                        {/* N4 Progress */}
                        <div>
                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-indigo-100">
                                <span>N4 Kanji Mastered</span>
                                <span>{n4Progress}%</span>
                            </div>
                            <div className="w-full bg-black/20 rounded-full h-2.5 mb-2">
                                <div className="bg-white h-2.5 rounded-full transition-all duration-1000" style={{ width: `${n4Progress}%` }}></div>
                            </div>
                            <p className="text-sm font-medium text-indigo-50">
                                {stats.n4Mastered} <span className="opacity-60">/ {totalN4Kanji}</span>
                                {stats.n4Learning > 0 && <span className="opacity-60 ml-2 text-xs">({stats.n4Learning} learning)</span>}
                            </p>
                        </div>

                        {/* N5 Progress */}
                        <div>
                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-indigo-100">
                                <span>N5 Kanji Mastered</span>
                                <span>{n5Progress}%</span>
                            </div>
                            <div className="w-full bg-black/20 rounded-full h-2.5 mb-2">
                                <div className="bg-emerald-400 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${n5Progress}%` }}></div>
                            </div>
                            <p className="text-sm font-medium text-indigo-50">
                                {stats.n5Mastered} <span className="opacity-60">/ {totalN5Kanji}</span>
                                {stats.n5Learning > 0 && <span className="opacity-60 ml-2 text-xs">({stats.n5Learning} learning)</span>}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                     <Link to="/flashcards" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-5 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm">
                        <Zap size={18} />
                        Quick Review
                    </Link>
                </div>
            </div>
        </div>

        {/* Word of the Day - Clean Card Style */}
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 md:p-8 shadow-lg shadow-slate-100 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 flex flex-col justify-between relative overflow-hidden group hover:border-orange-100 dark:hover:border-orange-900 transition-colors">
            <div className="absolute -right-12 -top-12 w-32 h-32 md:w-40 md:h-40 bg-orange-50 dark:bg-orange-900/20 rounded-full transition-transform group-hover:scale-110 duration-700 pointer-events-none"></div>
            <div className="relative z-10">
                <h3 className="font-bold text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest mb-6 md:mb-8 flex items-center gap-2">
                    <Star size={16} className="text-orange-400 fill-orange-400" /> Word of the Day
                </h3>
                {wordOfDay ? (
                    <div className="text-center py-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 font-jp mb-3 animate-fade-in">{wordOfDay.word}</h2>
                        <p className="text-slate-400 dark:text-slate-500 font-jp text-lg md:text-xl mb-6 animate-fade-in delay-100" style={{ animationFillMode: 'forwards' }}>{wordOfDay.reading}</p>
                        <div className="inline-flex items-center px-4 py-2 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-xl font-mm font-bold text-sm border border-orange-100 dark:border-orange-800 animate-fade-in delay-200" style={{ animationFillMode: 'forwards' }}>
                            {wordOfDay.meaning}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-slate-300 py-8">Loading...</div>
                )}
            </div>
            <div className="text-center mt-6 pt-6 border-t border-slate-50 dark:border-slate-700/50">
                 <span className="text-[10px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest">Daily Practice</span>
            </div>
        </div>
      </div>

      {/* Study Categories */}
      <div className="opacity-0 animate-slide-up delay-300" style={{ animationFillMode: 'forwards' }}>
        <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white">Learning Paths</h3>
            <span className="text-sm font-medium text-slate-400">Select a module</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {/* N4 Module */}
            <Link to="/list" className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-100 dark:border-slate-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-blue-100 dark:hover:border-blue-900 transition-all group duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200 dark:group-hover:shadow-none">
                    <BookOpen size={24} />
                </div>
                <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 mb-1">N4 Kanji</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Master essential characters for daily life.</p>
            </Link>

            {/* N5 Module */}
            <Link to="/n5-list" className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-100 dark:border-slate-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-emerald-100 dark:hover:border-emerald-900 transition-all group duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-emerald-200 dark:group-hover:shadow-none">
                    <Book size={24} />
                </div>
                <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 mb-1">N5 Basic</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Foundation vocabulary and simple kanji.</p>
            </Link>

            {/* Adjectives */}
            <Link to="/adj-list" className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-100 dark:border-slate-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-pink-100 dark:hover:border-pink-900 transition-all group duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 rounded-2xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-pink-200 dark:group-hover:shadow-none">
                    <Star size={24} />
                </div>
                <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 mb-1">Adjectives</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Descriptive words (i-adj & na-adj).</p>
            </Link>

            {/* Adverbs */}
            <Link to="/adv-list" className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-100 dark:border-slate-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-violet-100 dark:hover:border-violet-900 transition-all group duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 rounded-2xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-violet-200 dark:group-hover:shadow-none">
                    <Zap size={24} />
                </div>
                <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 mb-1">Adverbs</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Express frequency, degree, and manner.</p>
            </Link>
            
             {/* Same Meaning */}
             <Link to="/same-meaning" className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-100 dark:border-slate-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-orange-100 dark:hover:border-orange-900 transition-all group duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-orange-200 dark:group-hover:shadow-none">
                    <BookCopy size={24} />
                </div>
                <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 mb-1">Same Meaning</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Synonyms and similar expressions.</p>
            </Link>
        </div>
      </div>
    </div>
  );
};
