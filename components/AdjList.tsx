
import React, { useState } from 'react';
import { Search, Star, WalletCards } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ADJ_DATA } from '../adj_data';

export const AdjList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = ADJ_DATA.filter(item => 
    item.word.includes(searchTerm) ||
    item.reading.includes(searchTerm) ||
    item.meaning.includes(searchTerm)
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Star className="text-pink-500 fill-pink-500" />
              N4/N5 Adjectives
            </h2>
            <p className="text-slate-500 text-sm font-mm mt-1">နာမဝိသေသနများ (i-adj / na-adj)</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link to="/adj-flashcards" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-colors font-medium shadow-sm shadow-pink-200">
                <WalletCards size={18} />
                <span>Flashcards</span>
            </Link>
            
            <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search adjectives..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-slate-900 placeholder-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 font-bold text-slate-500 text-xs uppercase tracking-wider items-center">
           <div className="col-span-1 text-center">No.</div>
           <div className="col-span-3">Word</div>
           <div className="col-span-4">Reading</div>
           <div className="col-span-4">Meaning</div>
        </div>

        <div className="divide-y divide-slate-100">
            {filteredData.map((entry) => (
                <div key={entry.id} className="p-4 hover:bg-pink-50/30 transition-colors grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center group">
                    <div className="md:col-span-1 text-slate-400 text-xs font-mono md:text-center flex gap-2 md:block">
                        <span className="md:hidden">No.</span>
                        {entry.id}
                    </div>
                    <div className="md:col-span-3 font-bold text-slate-800 text-xl font-jp flex items-center gap-2">
                        {entry.word}
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans font-bold uppercase tracking-wide ${entry.type === 'na' ? 'bg-purple-100 text-purple-700 border border-purple-200' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                            {entry.type}-adj
                        </span>
                         <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-sans font-bold border border-slate-200">
                            {entry.level}
                        </span>
                    </div>
                    <div className="md:col-span-4 font-medium text-slate-600 font-jp">{entry.reading}</div>
                    <div className="md:col-span-4 font-mm text-slate-700">{entry.meaning}</div>
                </div>
            ))}
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
