
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { BookOpen, WalletCards, Home, Menu, X, GraduationCap, User as UserIcon, BookCopy, Book, FileText, Star, Zap, Gamepad2, LogOut, Info } from 'lucide-react';
import { KanjiList } from './components/KanjiList';
import { Flashcards } from './components/Flashcards';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { SameMeaningList } from './components/SameMeaningList';
import { GrammarList } from './components/GrammarList';
import { N5List } from './components/N5List';
import { N5Flashcards } from './components/N5Flashcards';
import { SameMeaningQuiz } from './components/SameMeaningQuiz';
import { AdjList } from './components/AdjList';
import { AdjFlashcards } from './components/AdjFlashcards';
import { AdvList } from './components/AdvList';
import { AdvFlashcards } from './components/AdvFlashcards';
import { AdvQuiz } from './components/AdvQuiz';
import { About } from './components/About';
import { KANJI_DATA } from './data';
import { N5_DATA } from './n5_data';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useAuth();
    
    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center text-slate-400">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return <>{children}</>;

  const navItems = [
    { path: '/', label: 'Dashboard', icon: <Home size={20} /> },
    { section: 'Kanji Modules' },
    { path: '/list', label: 'N4 Kanji List', icon: <BookOpen size={20} /> },
    { path: '/n5-list', label: 'N5 Kanji List', icon: <FileText size={20} /> },
    { section: 'Vocabulary' },
    { path: '/adj-list', label: 'Adjectives', icon: <Star size={20} /> },
    { path: '/adv-list', label: 'Adverbs', icon: <Zap size={20} /> },
    { path: '/same-meaning', label: 'Same Meaning', icon: <BookCopy size={20} /> },
    { path: '/grammar', label: 'Grammar Notes', icon: <Book size={20} /> },
    { section: 'Practice Zone' },
    { path: '/flashcards', label: 'N4 Flashcards', icon: <WalletCards size={20} /> },
    { path: '/n5-flashcards', label: 'N5 Flashcards', icon: <WalletCards size={20} /> },
    { path: '/adv-quiz', label: 'Adverb Quiz', icon: <Gamepad2 size={20} /> },
    { section: 'Account' },
    { path: '/profile', label: 'Profile', icon: <UserIcon size={20} /> },
    { path: '/about', label: 'About', icon: <Info size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-[#F8F9FC] text-slate-800 font-sans">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-200/60 fixed h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-8 flex items-center gap-3.5">
          <div className="bg-indigo-600 p-2.5 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-slate-900">Kanji Master</h1>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Academy Edition</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-2 space-y-0.5 overflow-y-auto custom-scrollbar">
          {navItems.map((item, idx) => {
            if (item.section) {
                return (
                    <div key={idx} className="px-4 pt-6 pb-3">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.section}</p>
                    </div>
                );
            }
            const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path || '###');
            return (
                <NavLink
                key={item.path}
                to={item.path!}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-[14px] ${
                    isActive
                        ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`
                }
                >
                    <span className={isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}>
                        {item.icon}
                    </span>
                    <span>{item.label}</span>
                </NavLink>
            );
          })}
        </nav>

        <div className="p-5 border-t border-slate-100">
            <button 
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
            >
                <LogOut size={18} />
                <span>Sign Out</span>
            </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-white/90 backdrop-blur-xl z-30 border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl text-white">
            <GraduationCap size={20} />
          </div>
          <span className="font-bold text-slate-900 text-lg">Kanji Master</span>
        </div>
        <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
        >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/40 z-20 md:hidden backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-4 pt-20 flex flex-col overflow-y-auto" onClick={e => e.stopPropagation()}>
             <nav className="space-y-1 flex-1">
              {navItems.map((item, idx) => {
                if (item.section) {
                    return (
                        <div key={idx} className="px-4 pt-6 pb-2">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.section}</p>
                        </div>
                    );
                }
                const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path || '###');
                return (
                    <NavLink
                    key={item.path}
                    to={item.path!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-colors font-medium text-sm ${
                        isActive
                            ? 'bg-indigo-50 text-indigo-600'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`
                    }
                    >
                    {item.icon}
                    <span>{item.label}</span>
                    </NavLink>
                );
              })}
              <button 
                  onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-colors font-bold text-red-600 hover:bg-red-50 mt-6 text-sm"
              >
                  <LogOut size={20} />
                  <span>Sign Out</span>
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-72 min-h-screen pt-24 md:pt-10 pb-12 bg-[#F8F9FC]">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
            {children}
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ProgressProvider>
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/list" element={<ProtectedRoute><KanjiList data={KANJI_DATA} /></ProtectedRoute>} />
                    <Route path="/n5-list" element={<ProtectedRoute><N5List /></ProtectedRoute>} />
                    
                    <Route path="/adj-list" element={<ProtectedRoute><AdjList /></ProtectedRoute>} />
                    <Route path="/adj-flashcards" element={<ProtectedRoute><AdjFlashcards /></ProtectedRoute>} />
                    
                    <Route path="/adv-list" element={<ProtectedRoute><AdvList /></ProtectedRoute>} />
                    <Route path="/adv-flashcards" element={<ProtectedRoute><AdvFlashcards /></ProtectedRoute>} />
                    <Route path="/adv-quiz" element={<ProtectedRoute><AdvQuiz /></ProtectedRoute>} />

                    <Route path="/same-meaning" element={<ProtectedRoute><SameMeaningList /></ProtectedRoute>} />
                    <Route path="/same-meaning-quiz" element={<ProtectedRoute><SameMeaningQuiz /></ProtectedRoute>} />
                    <Route path="/grammar" element={<ProtectedRoute><GrammarList /></ProtectedRoute>} />
                    <Route path="/flashcards" element={<ProtectedRoute><Flashcards data={KANJI_DATA} /></ProtectedRoute>} />
                    <Route path="/n5-flashcards" element={<ProtectedRoute><N5Flashcards data={N5_DATA} /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </HashRouter>
      </ProgressProvider>
    </AuthProvider>
  );
};

export default App;
