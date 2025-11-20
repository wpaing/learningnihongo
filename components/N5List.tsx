
import React, { useState } from 'react';
import { Search, Book, WalletCards, CheckCircle2, BookOpen, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { N5_DATA } from '../n5_data';
import { useProgress } from '../contexts/ProgressContext';
import { KanjiStatus } from '../types';

export const N5List = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { n5Status, updateN5Status } = useProgress();

  const filteredData = N5_DATA.filter(item => 
    item.kanji.includes(searchTerm) ||
    item.reading.includes(searchTerm) ||
    item.meaning.includes(searchTerm)
  );

  const getStatusColor = (status?: KanjiStatus) => {
    switch (status) {
      case 'mastered': return 'bg-green-50 text-green-600 border-green-200';
      case 'learning': return 'bg-yellow-50 text-yellow-600 border-yellow-200';
      default: return 'text-slate-300 hover:text-slate-400';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Book className="text-orange-500" />
              N5 Kanji & Vocabulary
            </h2>
            <p className="text-gray-500 text-sm font-mm">N5 အတွက် ခန်းဂျီးနှင့် ဝေါဟာရများ</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link to="/n5-flashcards" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium shadow-sm">
                <WalletCards size={18} />
                <span>Start N5 Flashcards</span>
            </Link>
            
            <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-600 text-sm items-center">
           <div className="col-span-1 text-center">No.</div>
           <div className="col-span-3">Kanji</div>
           <div className="col-span-3">Hiragana</div>
           <div className="col-span-3">Myanmar</div>
           <div className="col-span-2 text-center">Status</div>
        </div>
        
        <div className="divide-y divide-gray-100">
            {filteredData.map((entry) => {
                const status = n5Status[entry.id] || 'new';
                return (
                <div key={entry.id} className="p-4 hover:bg-orange-50/30 transition-colors grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center group">
                    <div className="md:col-span-1 text-gray-400 text-xs font-mono md:text-center flex gap-2 md:block">
                        <span className="md:hidden">No.</span>
                        {entry.id}
                    </div>
                    <div className="md:col-span-3 font-bold text-gray-800 text-xl font-jp">{entry.kanji}</div>
                    <div className="md:col-span-3 font-medium text-gray-600 font-jp">{entry.reading}</div>
                    <div className="md:col-span-3 font-mm text-gray-700">{entry.meaning}</div>
                    
                    {/* Status Actions */}
                    <div className="md:col-span-2 flex justify-end md:justify-center gap-1">
                         <button 
                            onClick={() => updateN5Status(entry.id, 'new')}
                            title="Mark as New"
                            className={`p-1.5 rounded-lg transition-colors ${status === 'new' ? 'bg-slate-100 text-slate-600' : 'text-slate-300 hover:bg-slate-50'}`}
                         >
                            <Circle size={18} />
                         </button>
                         <button 
                            onClick={() => updateN5Status(entry.id, 'learning')}
                            title="Mark as Learning"
                            className={`p-1.5 rounded-lg transition-colors ${status === 'learning' ? 'bg-yellow-100 text-yellow-600' : 'text-slate-300 hover:bg-yellow-50 hover:text-yellow-500'}`}
                         >
                            <BookOpen size={18} />
                         </button>
                         <button 
                            onClick={() => updateN5Status(entry.id, 'mastered')}
                            title="Mark as Mastered"
                            className={`p-1.5 rounded-lg transition-colors ${status === 'mastered' ? 'bg-green-100 text-green-600' : 'text-slate-300 hover:bg-green-50 hover:text-green-500'}`}
                         >
                            <CheckCircle2 size={18} />
                         </button>
                    </div>
                </div>
            )})}
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
