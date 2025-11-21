
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, CheckCircle2, Circle, BookOpen, Heart, Filter } from 'lucide-react';
import { KanjiEntry, KanjiStatus } from '../types';
import { useProgress } from '../contexts/ProgressContext';

export const KanjiList = ({ data }: { data: KanjiEntry[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { n4Status, updateN4Status, favorites, toggleFavorite } = useProgress();

  const filteredData = data.filter(item => {
    const matchesSearch = 
      item.kanji.includes(searchTerm) ||
      item.onReading.includes(searchTerm) ||
      item.kunReading.includes(searchTerm) ||
      item.compounds.some(c => c.word.includes(searchTerm) || c.meaningMM.includes(searchTerm));
    
    const matchesFavorite = showFavoritesOnly ? favorites.n4.includes(item.id) : true;

    return matchesSearch && matchesFavorite;
  });

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusColor = (status?: KanjiStatus) => {
    switch (status) {
      case 'mastered': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900';
      case 'learning': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-900';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';
    }
  };

  const getStatusLabel = (status?: KanjiStatus) => {
    switch (status) {
      case 'mastered': return 'Mastered';
      case 'learning': return 'Learning';
      default: return 'New';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="text-indigo-600 dark:text-indigo-400" />
              N4 Kanji List
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Track your progress for each character</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
             <button 
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-colors font-medium shadow-sm border ${
                    showFavoritesOnly 
                    ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
            >
                <Heart size={18} className={showFavoritesOnly ? "fill-pink-600 dark:fill-pink-400" : ""} />
                <span className="hidden sm:inline">Favorites</span>
            </button>

            <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search kanji..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredData.map((entry) => {
            const status = n4Status[entry.id] || 'new';
            const isFav = favorites.n4.includes(entry.id);
            
            return (
            <div key={entry.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div 
                    onClick={() => toggleExpand(entry.id)}
                    className="p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center cursor-pointer bg-white dark:bg-slate-800 hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-colors relative gap-4"
                >
                    <div className="flex items-center w-full md:w-auto justify-between md:justify-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-jp font-bold shadow-sm border border-indigo-100 dark:border-indigo-900">
                            {entry.kanji}
                        </div>
                        
                        {/* Status Badge (Mobile) */}
                        <div className={`md:hidden text-xs px-2.5 py-1 rounded-full border font-bold uppercase tracking-wider ${getStatusColor(status)}`}>
                            {getStatusLabel(status)}
                        </div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 w-full">
                        <div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">On-yomi</span>
                            <span className="font-jp text-base md:text-lg text-slate-800 dark:text-slate-100 font-medium">{entry.onReading}</span>
                        </div>
                        <div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">Kun-yomi</span>
                            <span className="font-jp text-base md:text-lg text-slate-800 dark:text-slate-100 font-medium">{entry.kunReading}</span>
                        </div>
                    </div>

                    {/* Status Badge (Desktop) */}
                    <div className={`hidden md:block text-xs px-3 py-1 rounded-full border font-bold uppercase tracking-wider mr-8 ${getStatusColor(status)}`}>
                        {getStatusLabel(status)}
                    </div>

                    {/* Favorite Button */}
                    <button 
                        onClick={(e) => { e.stopPropagation(); toggleFavorite('n4', entry.id); }}
                        className={`p-2 rounded-full transition-all hover:bg-pink-50 dark:hover:bg-pink-900/20 ${isFav ? 'text-pink-500 dark:text-pink-400' : 'text-slate-300 dark:text-slate-600 hover:text-pink-400 dark:hover:text-pink-400'}`}
                    >
                        <Heart size={20} className={isFav ? "fill-pink-500 dark:fill-pink-400" : ""} />
                    </button>

                    <div className="text-slate-400 dark:text-slate-500 absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                        {expandedId === entry.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                </div>

                {expandedId === entry.id && (
                    <div className="border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-4 md:p-6 animate-fade-in">
                        {/* Progress Controls */}
                        <div className="flex flex-wrap gap-2 mb-6 justify-end border-b border-slate-200 dark:border-slate-700 pb-4">
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-auto self-center">Learning Status:</span>
                            <button 
                                onClick={() => updateN4Status(entry.id, 'new')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${status === 'new' ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-inner' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                            >
                                <Circle size={14} /> New
                            </button>
                            <button 
                                onClick={() => updateN4Status(entry.id, 'learning')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${status === 'learning' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-900 shadow-sm' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:text-yellow-600'}`}
                            >
                                <BookOpen size={14} /> Learning
                            </button>
                            <button 
                                onClick={() => updateN4Status(entry.id, 'mastered')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${status === 'mastered' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900 shadow-sm' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600'}`}
                            >
                                <CheckCircle2 size={14} /> Mastered
                            </button>
                        </div>

                        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wide flex items-center gap-2">
                            Compounds & Meanings
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {entry.compounds.map((comp, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-jp text-xl font-bold text-indigo-900 dark:text-indigo-300">{comp.word}</span>
                                    </div>
                                    <span className="text-sm text-slate-500 dark:text-slate-400 font-jp mb-2 font-medium">{comp.reading}</span>
                                    <span className="text-base font-mm text-slate-700 dark:text-slate-300">{comp.meaningMM}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )})}
        
        {filteredData.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 font-medium">No results found matching "{searchTerm}"</p>
                {showFavoritesOnly && <p className="text-indigo-500 dark:text-indigo-400 text-sm mt-1 cursor-pointer hover:underline" onClick={() => setShowFavoritesOnly(false)}>Clear favorites filter</p>}
            </div>
        )}
      </div>
    </div>
  );
};
