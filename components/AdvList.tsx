
import React, { useState } from 'react';
import { Search, Zap, WalletCards, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ADV_DATA } from '../adv_data';

export const AdvList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = ADV_DATA.filter(item => 
    item.word.includes(searchTerm) ||
    (item.reading && item.reading.includes(searchTerm)) ||
    item.meaning.includes(searchTerm)
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Zap className="text-violet-500" />
              N4/N5 Adverbs
            </h2>
            <p className="text-gray-500 text-sm font-mm">ကြိယာဝိသေသနများ</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link to="/adv-flashcards" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-violet-600 border border-violet-200 rounded-xl hover:bg-violet-50 transition-colors font-medium shadow-sm">
                <WalletCards size={18} />
                <span>Flashcards</span>
            </Link>
            <Link to="/adv-quiz" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors font-medium shadow-sm shadow-violet-200">
                <Gamepad2 size={18} />
                <span>Start Quiz</span>
            </Link>
            
            <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search adverbs..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-100">
            {filteredData.map((entry) => (
                <div key={entry.id} className="p-4 hover:bg-violet-50/30 transition-colors grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                    <div className="md:col-span-1 text-gray-400 text-xs font-mono md:text-center flex gap-2 md:block">
                        <span className="md:hidden">No.</span>
                        {entry.id}
                    </div>
                    <div className="md:col-span-3 font-bold text-gray-800 text-xl font-jp">
                        {entry.word}
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
