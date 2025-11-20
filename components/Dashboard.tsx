
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
    // 1. Word of the Day
    const randomKanji = KANJI_DATA[Math.floor(Math.random() * KANJI_DATA.length)];
    if (randomKanji && randomKanji.compounds.length > 0) {
        setWordOfDay({
            kanji: randomKanji.kanji,
            word: randomKanji.compounds[0].word,
            meaning: randomKanji.compounds[0].meaningMM,
            reading: randomKanji.compounds[0].reading
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
    <div className="space-y-10 animate-fade-in pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
            <p className="text-slate-500 mt-2 font-mm text-lg">သင်၏ ဂျပန်စာလေ့လာမှု ခရီးစဉ်</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-600">Active Session</span>
        </div>
      </div>

      {/* Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Progress Card - Modern Gradient */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#818CF8] rounded-[2rem] p-8 text-white shadow-xl shadow-indigo-200/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl transition-transform group-hover:scale-110 duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-16 -mb-16 blur-2xl"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-3">
                                <TrendingUp size={14} className="text-yellow-300" /> Learning Statistics
                            </div>
                            <h2 className="text-3xl font-bold leading-tight">Your Mastery<br/>Progress</h2>
                        </div>
                        <div className="text-right hidden sm:block">
                            <div className="text-4xl font-bold flex items-center gap-1 justify-end">
                                {streak} <span className="text-lg text-indigo-200 font-medium">days</span>
                            </div>
                            <p className="text-indigo-200 text-xs uppercase tracking-wider font-bold">Current Streak</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        {/* N4 Progress */}
                        <div>
                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-indigo-100">
                                <span>N4 Kanji Mastered</span>
                                <span>{n4Progress}%</span>
                            </div>
                            <div className="w-full bg-black/20 rounded-full h-3 mb-2">
                                <div className="bg-white h-3 rounded-full transition-all duration-1000" style={{ width: `${n4Progress}%` }}></div>
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
                            <div className="w-full bg-black/20 rounded-full h-3 mb-2">
                                <div className="bg-emerald-400 h-3 rounded-full transition-all duration-1000" style={{ width: `${n5Progress}%` }}></div>
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
        <div className="bg-white rounded-[2rem] p-8 shadow-lg shadow-slate-100 border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:border-orange-100 transition-colors">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-orange-50 rounded-full transition-transform group-hover:scale-110 duration-700"></div>
            <div className="relative z-10">
                <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                    <Star size={16} className="text-orange-400 fill-orange-400" /> Daily Vocabulary
                </h3>
                {wordOfDay ? (
                    <div className="text-center py-2">
                        <h2 className="text-5xl font-bold text-slate-800 font-jp mb-3">{wordOfDay.word}</h2>
                        <p className="text-slate-400 font-jp text-xl mb-6">{wordOfDay.reading}</p>
                        <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-700 rounded-xl font-mm font-bold text-sm border border-orange-100">
                            {wordOfDay.meaning}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-slate-300 py-8">Loading...</div>
                )}
            </div>
            <div className="text-center mt-6 pt-6 border-t border-slate-50">
                 <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Daily Practice</span>
            </div>
        </div>
      </div>

      {/* Study Categories - Canva Style Icons */}
      <div>
        <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xl text-slate-900">Learning Paths</h3>
            <span className="text-sm font-medium text-slate-400">Select a module</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* N4 Module */}
            <Link to="/list" className="bg-white p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-blue-100 transition-all group duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200">
                    <BookOpen size={26} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">N4 Kanji</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Master essential characters for daily life.</p>
            </Link>

            {/* N5 Module */}
            <Link to="/n5-list" className="bg-white p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-emerald-100 transition-all group duration-300">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-emerald-200">
                    <Book size={26} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">N5 Basic</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Foundation vocabulary and simple kanji.</p>
            </Link>

            {/* Adjectives */}
            <Link to="/adj-list" className="bg-white p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-pink-100 transition-all group duration-300">
                <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-pink-200">
                    <Star size={26} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">Adjectives</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Descriptive words (i-adj & na-adj).</p>
            </Link>

            {/* Adverbs */}
            <Link to="/adv-list" className="bg-white p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-violet-100 transition-all group duration-300">
                <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-violet-200">
                    <Zap size={26} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">Adverbs</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Express frequency, degree, and manner.</p>
            </Link>
            
             {/* Same Meaning */}
             <Link to="/same-meaning" className="bg-white p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-orange-100 transition-all group duration-300">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-orange-200">
                    <BookCopy size={26} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">Synonyms</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Words with similar meanings.</p>
            </Link>
            
            {/* Flashcards Shortcut */}
            <Link to="/flashcards" className="bg-white p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-slate-200 transition-all group duration-300 md:col-span-3 lg:col-span-3 bg-gradient-to-r from-white to-slate-50">
                <div className="flex items-center gap-5 h-full">
                    <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
                        <WalletCards size={26} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900 mb-1">Quick Review</h4>
                        <p className="text-slate-500 text-sm">Jump straight into N4 Flashcards session.</p>
                    </div>
                    <div className="ml-auto bg-white p-2 rounded-full shadow-sm group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={20} className="text-slate-400 group-hover:text-slate-800" />
                    </div>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};
