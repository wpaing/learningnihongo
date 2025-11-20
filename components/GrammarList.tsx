
import React, { useState } from 'react';
import { Search, Book, ChevronDown, ChevronUp } from 'lucide-react';
import { GRAMMAR_DATA } from '../grammar_data';

export const GrammarList = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Book className="text-orange-500" />
            N4 Grammar Notes
        </h2>
        <p className="text-gray-500 text-sm font-mm">အခန်း ၂၆ မှ ၅၀ အထိ သဒ္ဒါရှင်းလင်းချက်များ</p>
      </div>

      <div className="space-y-4">
        {GRAMMAR_DATA.map((grammar) => (
            <div key={grammar.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div 
                    onClick={() => toggleExpand(grammar.id)}
                    className="p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                >
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{grammar.title}</h3>
                        <p className="text-sm text-gray-500">{grammar.description}</p>
                    </div>
                    <div className={`text-gray-400 transition-transform duration-200 ${expandedId === grammar.id ? 'rotate-180' : ''}`}>
                        <ChevronDown size={24} />
                    </div>
                </div>

                {expandedId === grammar.id && (
                    <div className="border-t border-gray-100 bg-gray-50/50 p-5 animate-fade-in">
                        <div className="mb-4">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pattern</span>
                            <div className="mt-1 p-3 bg-orange-100 text-orange-800 rounded-lg font-medium font-jp">
                                {grammar.pattern}
                            </div>
                        </div>
                        
                        <div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Examples</span>
                            <div className="space-y-3">
                                {grammar.examples.map((ex, idx) => (
                                    <div key={idx} className="p-3 bg-white border border-gray-200 rounded-lg">
                                        <p className="font-jp text-gray-800 text-lg mb-1">{ex.japanese}</p>
                                        <p className="font-mm text-gray-600 text-sm">{ex.myanmar}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        ))}
      </div>
    </div>
  );
};
