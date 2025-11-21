
export interface Compound {
  word: string;
  reading: string;
  meaningMM: string;
  meaningEN?: string;
}

export interface KanjiEntry {
  id: number;
  kanji: string;
  kunReading: string;
  onReading: string;
  compounds: Compound[];
}

export interface VocabularyEntry {
  id: number;
  kanji: string;
  reading: string;
  meaning: string;
}

export enum FlashcardMode {
  KANJI_TO_READING = 'KANJI_TO_READING',
  COMPOUND_TO_MEANING = 'COMPOUND_TO_MEANING',
  MEANING_TO_COMPOUND = 'MEANING_TO_COMPOUND'
}

export interface UserSettings {
  name: string;
  level: string;
  dailyGoal: number;
  notifications: boolean;
}

export interface User extends UserSettings {
  id: string;
  email: string;
  password?: string;
  provider?: 'email' | 'google' | 'facebook' | 'x';
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  loginWithSocial: (provider: 'google' | 'facebook' | 'x') => Promise<void>;
  register: (name: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  isLoading: boolean;
}

export type KanjiStatus = 'new' | 'learning' | 'mastered';

export interface Favorites {
  n4: number[];
  n5: number[];
}

export interface ProgressContextType {
  n4Status: Record<number, KanjiStatus>;
  n5Status: Record<number, KanjiStatus>;
  updateN4Status: (id: number, status: KanjiStatus) => void;
  updateN5Status: (id: number, status: KanjiStatus) => void;
  getStats: () => {
    n4Mastered: number;
    n4Learning: number;
    n5Mastered: number;
    n5Learning: number;
  };
  favorites: Favorites;
  toggleFavorite: (type: 'n4' | 'n5', id: number) => void;
}

export interface SameMeaningEntry {
  id: number;
  word: string;
  synonym: string;
  meaningMM: string;
}

export interface GrammarExample {
  japanese: string;
  myanmar: string;
}

export interface GrammarEntry {
  id: string;
  title: string;
  description: string;
  pattern: string;
  examples: GrammarExample[];
}

export interface AdjectiveEntry {
  id: number;
  word: string;
  reading: string;
  meaning: string;
  type: 'na' | 'i';
  level: 'N4' | 'N5';
}

export interface AdverbEntry {
  id: number;
  word: string;
  reading?: string;
  meaning: string;
}