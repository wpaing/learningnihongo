
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
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Star className="text-pink-500" />
              N4/N5 Adjectives
            </h2>
            <p className="text-gray-500 text-sm font-mm">နာမဝိသေသနများ (i-adj / na-adj)</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link to="/adj-flashcards" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-colors font-medium shadow-sm shadow-pink-200">
                <WalletCards size={18} />
                <span>Flashcards</span>
            </Link>
            
            <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search adjectives..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-100">
            {filteredData.map((entry) => (
                <div key={entry.id} className="p-4 hover:bg-pink-50/30 transition-colors grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                    <div className="md:col-span-1 text-gray-400 text-xs font-mono md:text-center flex gap-2 md:block">
                        <span className="md:hidden">No.</span>
                        {entry.id}
                    </div>
                    <div className="md:col-span-3 font-bold text-gray-800 text-xl font-jp flex items-center gap-2">
                        {entry.word}
                        <span className={`text-xs px-2 py-0.5 rounded-full font-sans font-medium ${entry.type === 'na' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                            {entry.type === 'na' ? 'な' : 'い'}
                        </span>
                         <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-sans font-medium border border-gray-200">
                            {entry.level}
                        </span>
                    </div>
                    <div className="md:col-span-4 font-medium text-gray-600 font-jp">{entry.reading}</div>
                    <div className="md:col-span-4 font-mm text-gray-700">{entry.meaning}</div>
                </div>
            ))}
        </div>

        {filteredData.length === 0 && (
            <div className="text-center py-12">
                <p className="text-gray-500">No results found.</p>
            </div>
        )}
      </div>
    </div>
  );
};
