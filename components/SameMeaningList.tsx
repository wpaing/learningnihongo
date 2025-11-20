
import React, { useState } from 'react';
import { Search, BookCopy, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SAME_MEANING_DATA } from '../samemeaning_data';

export const SameMeaningList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = SAME_MEANING_DATA.filter(item => 
    item.word.includes(searchTerm) ||
    item.synonym.includes(searchTerm) ||
    item.meaningMM.includes(searchTerm)
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BookCopy className="text-orange-500" />
              Same Meaning
            </h2>
            <p className="text-gray-500 text-sm font-mm">တူညီသော အဓိပ္ပါယ်ရှိသော စကားလုံးများ</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link to="/same-meaning-quiz" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium shadow-sm">
                <Gamepad2 size={18} />
                <span>Take Quiz</span>
            </Link>
            
            <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search words..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-gray-100 bg-gray-50 border-b border-gray-200">
           {/* Header could go here if we wanted a table layout, but card grid is better for mobile */}
        </div>
        
        <div className="divide-y divide-gray-100">
            {filteredData.map((entry) => (
                <div key={entry.id} className="p-4 hover:bg-orange-50/30 transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-1 text-gray-400 text-xs font-mono">{entry.id}</div>
                    <div className="md:col-span-4 font-bold text-gray-800 text-lg">{entry.word}</div>
                    <div className="md:col-span-1 hidden md:block text-center text-gray-300">
                        =
                    </div>
                    <div className="md:col-span-3 font-medium text-gray-700">{entry.synonym}</div>
                    <div className="md:col-span-3 font-mm text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-lg inline-block w-fit">
                        {entry.meaningMM}
                    </div>
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
