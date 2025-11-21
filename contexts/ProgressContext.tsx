
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProgressContextType, KanjiStatus, Favorites } from '../types';

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [n4Status, setN4Status] = useState<Record<number, KanjiStatus>>({});
  const [n5Status, setN5Status] = useState<Record<number, KanjiStatus>>({});
  const [favorites, setFavorites] = useState<Favorites>({ n4: [], n5: [] });

  // Load initial state
  useEffect(() => {
    const storedN4 = localStorage.getItem('n4_progress');
    const storedN5 = localStorage.getItem('n5_progress');
    const storedFavorites = localStorage.getItem('favorites');
    
    if (storedN4) setN4Status(JSON.parse(storedN4));
    if (storedN5) setN5Status(JSON.parse(storedN5));
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);

  const updateN4Status = (id: number, status: KanjiStatus) => {
    setN4Status(prev => {
      const next = { ...prev, [id]: status };
      localStorage.setItem('n4_progress', JSON.stringify(next));
      return next;
    });
  };

  const updateN5Status = (id: number, status: KanjiStatus) => {
    setN5Status(prev => {
      const next = { ...prev, [id]: status };
      localStorage.setItem('n5_progress', JSON.stringify(next));
      return next;
    });
  };

  const toggleFavorite = (type: 'n4' | 'n5', id: number) => {
    setFavorites(prev => {
      const currentList = prev[type];
      const newList = currentList.includes(id)
        ? currentList.filter(item => item !== id)
        : [...currentList, id];
      
      const next = { ...prev, [type]: newList };
      localStorage.setItem('favorites', JSON.stringify(next));
      return next;
    });
  };

  const getStats = () => {
    const n4Values = Object.values(n4Status);
    const n5Values = Object.values(n5Status);

    return {
      n4Mastered: n4Values.filter(s => s === 'mastered').length,
      n4Learning: n4Values.filter(s => s === 'learning').length,
      n5Mastered: n5Values.filter(s => s === 'mastered').length,
      n5Learning: n5Values.filter(s => s === 'learning').length,
    };
  };

  return (
    <ProgressContext.Provider value={{ n4Status, n5Status, updateN4Status, updateN5Status, getStats, favorites, toggleFavorite }}>
      {children}
    </ProgressContext.Provider>
  );
};