
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, CheckCircle2, Circle, BookOpen } from 'lucide-react';
import { KanjiEntry, KanjiStatus } from '../types';
import { useProgress } from '../contexts/ProgressContext';

export const KanjiList = ({ data }: { data: KanjiEntry[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { n4Status, updateN4Status } = useProgress();

  const filteredData = data.filter(item => 
    item.kanji.includes(searchTerm) ||
    item.onReading.includes(searchTerm) ||
    item.kunReading.includes(searchTerm) ||
    item.compounds.some(c => c.word.includes(searchTerm) || c.meaningMM.includes(searchTerm))
  );

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusColor = (status?: KanjiStatus) => {
    switch (status) {
      case 'mastered': return 'bg-green-100 text-green-700 border-green-200';
      case 'learning': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
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
            <h2 className="text-2xl font-bold text-gray-900">N4 Vocabulary List</h2>
            <p className="text-gray-500 text-sm">Track your progress for each character</p>
        </div>
        <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
                type="text" 
                placeholder="Search kanji, reading..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredData.map((entry) => {
            const status = n4Status[entry.id] || 'new';
            
            return (
            <div key={entry.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div 
                    onClick={() => toggleExpand(entry.id)}
                    className="p-5 flex items-center cursor-pointer bg-white hover:bg-gray-50 transition-colors relative"
                >
                    {/* Status Badge */}
                    <div className={`absolute top-5 right-12 text-xs px-2.5 py-1 rounded-full border font-medium uppercase tracking-wider ${getStatusColor(status)}`}>
                        {getStatusLabel(status)}
                    </div>

                    <div className="flex-shrink-0 w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-3xl font-jp font-bold shadow-inner">
                        {entry.kanji}
                    </div>
                    
                    <div className="ml-6 flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mr-16">
                        <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block mb-1">On-yomi</span>
                            <span className="font-jp text-lg text-gray-800">{entry.onReading}</span>
                        </div>
                        <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block mb-1">Kun-yomi</span>
                            <span className="font-jp text-lg text-gray-800">{entry.kunReading}</span>
                        </div>
                    </div>

                    <div className="ml-4 text-gray-400 absolute right-5">
                        {expandedId === entry.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                </div>

                {expandedId === entry.id && (
                    <div className="border-t border-gray-100 bg-gray-50/50 p-5 animate-fade-in">
                        {/* Progress Controls */}
                        <div className="flex gap-2 mb-6 justify-end">
                            <button 
                                onClick={() => updateN4Status(entry.id, 'new')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${status === 'new' ? 'bg-slate-200 text-slate-700' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'}`}
                            >
                                <Circle size={14} /> New
                            </button>
                            <button 
                                onClick={() => updateN4Status(entry.id, 'learning')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${status === 'learning' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' : 'bg-white border border-slate-200 text-slate-500 hover:bg-yellow-50 hover:text-yellow-600'}`}
                            >
                                <BookOpen size={14} /> Learning
                            </button>
                            <button 
                                onClick={() => updateN4Status(entry.id, 'mastered')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${status === 'mastered' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-white border border-slate-200 text-slate-500 hover:bg-green-50 hover:text-green-600'}`}
                            >
                                <CheckCircle2 size={14} /> Mastered
                            </button>
                        </div>

                        <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide flex items-center gap-2">
                            Compounds & Meanings
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {entry.compounds.map((comp, idx) => (
                                <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-jp text-xl font-medium text-indigo-900">{comp.word}</span>
                                    </div>
                                    <span className="text-sm text-gray-500 font-jp mb-1">{comp.reading}</span>
                                    <span className="text-base font-mm text-gray-800">{comp.meaningMM}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )})}
        
        {filteredData.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">No results found matching "{searchTerm}"</p>
            </div>
        )}
      </div>
    </div>
  );
};
