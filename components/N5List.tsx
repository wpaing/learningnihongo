
import React, { useState } from 'react';
import { Search, Book, WalletCards, CheckCircle2, BookOpen, Circle, Heart, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { N5_DATA } from '../n5_data';
import { useProgress } from '../contexts/ProgressContext';
import { KanjiStatus } from '../types';

export const N5List = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { n5Status, updateN5Status, favorites, toggleFavorite } = useProgress();

  const filteredData = N5_DATA.filter(item => {
    const matchesSearch = 
      item.kanji.includes(searchTerm) ||
      item.reading.includes(searchTerm) ||
      item.meaning.includes(searchTerm);
    
    const matchesFavorite = showFavoritesOnly ? favorites.n5.includes(item.id) : true;

    return matchesSearch && matchesFavorite;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Book className="text-emerald-500" />
              N5 Vocabulary
            </h2>
            <p className="text-slate-500 text-sm font-mm mt-1">N5 အတွက် ခန်းဂျီးနှင့် ဝေါဟာရများ</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link to="/n5-flashcards" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium shadow-sm shadow-emerald-200">
                <WalletCards size={18} />
                <span>Start N5 Flashcards</span>
            </Link>
            
            <button 
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl transition-colors font-medium shadow-sm border ${
                    showFavoritesOnly 
                    ? 'bg-pink-50 text-pink-600 border-pink-200' 
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
            >
                <Heart size={18} className={showFavoritesOnly ? "fill-pink-600" : ""} />
            </button>

            <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search vocab..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 placeholder-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 font-bold text-slate-500 text-xs uppercase tracking-wider items-center">
           <div className="col-span-1 text-center">No.</div>
           <div className="col-span-3">Kanji</div>
           <div className="col-span-3">Reading</div>
           <div className="col-span-3">Meaning (Myanmar)</div>
           <div className="col-span-2 text-center">Actions</div>
        </div>
        
        <div className="divide-y divide-slate-100">
            {filteredData.map((entry) => {
                const status = n5Status[entry.id] || 'new';
                const isFav = favorites.n5.includes(entry.id);
                return (
                <div key={entry.id} className="p-4 hover:bg-emerald-50/20 transition-colors grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center group">
                    <div className="md:col-span-1 text-slate-400 text-xs font-mono md:text-center flex gap-2 md:block">
                        <span className="md:hidden font-bold">No.</span>
                        {entry.id}
                    </div>
                    <div className="md:col-span-3 font-bold text-slate-800 text-xl font-jp">{entry.kanji}</div>
                    <div className="md:col-span-3 font-medium text-slate-600 font-jp">{entry.reading}</div>
                    <div className="md:col-span-3 font-mm text-slate-700">{entry.meaning}</div>
                    
                    {/* Actions */}
                    <div className="md:col-span-2 flex justify-end md:justify-center gap-2">
                         <button 
                            onClick={() => updateN5Status(entry.id, 'new')}
                            title="Mark as New"
                            className={`p-2 rounded-lg transition-all ${status === 'new' ? 'bg-slate-100 text-slate-600' : 'text-slate-300 hover:bg-slate-50 hover:text-slate-500'}`}
                         >
                            <Circle size={18} />
                         </button>
                         <button 
                            onClick={() => updateN5Status(entry.id, 'learning')}
                            title="Mark as Learning"
                            className={`p-2 rounded-lg transition-all ${status === 'learning' ? 'bg-yellow-100 text-yellow-600' : 'text-slate-300 hover:bg-yellow-50 hover:text-yellow-500'}`}
                         >
                            <BookOpen size={18} />
                         </button>
                         <button 
                            onClick={() => updateN5Status(entry.id, 'mastered')}
                            title="Mark as Mastered"
                            className={`p-2 rounded-lg transition-all ${status === 'mastered' ? 'bg-green-100 text-green-600' : 'text-slate-300 hover:bg-green-50 hover:text-green-500'}`}
                         >
                            <CheckCircle2 size={18} />
                         </button>
                         <button 
                            onClick={() => toggleFavorite('n5', entry.id)}
                            className={`p-2 rounded-lg transition-all ${isFav ? 'text-pink-500 bg-pink-50' : 'text-slate-300 hover:bg-pink-50 hover:text-pink-400'}`}
                         >
                            <Heart size={18} className={isFav ? "fill-pink-500" : ""} />
                         </button>
                    </div>
                </div>
            )})}
        </div>

        {filteredData.length === 0 && (
            <div className="text-center py-16">
                <p className="text-slate-500">No results found.</p>
            </div>
        )}
      </div>
    </div>
  );
};
