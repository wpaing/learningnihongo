
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { BookOpen, WalletCards, Home, Menu, X, GraduationCap, User as UserIcon, BookCopy, Book, FileText, Star, Zap, Gamepad2, LogOut, Info, Moon, Sun } from 'lucide-react';
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
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useAuth();
    
    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center text-slate-400 bg-[#F8F9FC] dark:bg-slate-900">
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
  const { theme, toggleTheme } = useTheme();
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
    <div className="min-h-screen flex bg-[#F8F9FC] dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Sidebar (Desktop & Tablet Landscape) */}
      <aside className="hidden md:flex flex-col w-72 bg-white dark:bg-slate-800 border-r border-slate-200/60 dark:border-slate-700 fixed h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.01)]">
        <div className="p-8 flex items-center gap-3.5">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-2.5 rounded-xl text-white shadow-lg shadow-indigo-500/20">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-slate-900 dark:text-white font-jp">Kanji Master</h1>
            <p className="text-[10px] text-indigo-500 dark:text-indigo-400 font-bold tracking-widest uppercase">Academy Edition</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item, idx) => {
            if (item.section) {
                return (
                    <div key={idx} className="px-4 pt-6 pb-2">
                        <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{item.section}</p>
                    </div>
                );
            }
            const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path || '###');
            return (
                <NavLink
                key={item.path}
                to={item.path!}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-[14px] group relative ${
                    isActive
                        ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-semibold'
                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
                    }`
                }
                >
                    {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-600 dark:bg-indigo-400 rounded-r-full"></div>}
                    <span className={`transition-colors ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`}>
                        {item.icon}
                    </span>
                    <span>{item.label}</span>
                </NavLink>
            );
          })}
        </nav>

        <div className="p-5 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 space-y-3">
            <button 
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
                <span className="flex items-center gap-2">
                    {theme === 'dark' ? <Moon size={16} className="text-indigo-400" /> : <Sun size={16} className="text-amber-500" />}
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </span>
                <div className={`w-8 h-4 rounded-full relative transition-colors ${theme === 'dark' ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                    <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${theme === 'dark' ? 'translate-x-4' : 'translate-x-0'}`}></div>
                </div>
            </button>

            <button 
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 rounded-xl transition-all duration-200 border border-transparent hover:border-red-100 dark:hover:border-red-900"
            >
                <LogOut size={18} />
                <span>Sign Out</span>
            </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl z-30 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between shadow-sm top-0 left-0 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl text-white">
            <GraduationCap size={20} />
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-lg font-jp">Kanji Master</span>
        </div>
        <div className="flex items-center gap-2">
            <button 
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
            >
                {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors focus:outline-none active:bg-slate-200 dark:active:bg-slate-600"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white dark:bg-slate-800 shadow-2xl flex flex-col animate-fade-in">
             <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex justify-end">
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <X size={24} />
                </button>
             </div>
             <nav className="space-y-1 flex-1 overflow-y-auto px-4 py-4">
              {navItems.map((item, idx) => {
                if (item.section) {
                    return (
                        <div key={idx} className="px-4 pt-6 pb-2">
                            <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{item.section}</p>
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
                            ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-semibold'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                        }`
                    }
                    >
                    <span className={isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}>{item.icon}</span>
                    <span>{item.label}</span>
                    </NavLink>
                );
              })}
              <div className="pt-6 pb-10">
                  <button 
                      onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-colors font-bold text-red-600 hover:bg-red-50 border border-red-100 justify-center"
                  >
                      <LogOut size={18} />
                      <span>Sign Out</span>
                  </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-72 min-h-screen pt-20 md:pt-8 pb-12 bg-[#F8F9FC] dark:bg-slate-900 transition-colors duration-300">
        <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
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
        <ThemeProvider>
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
        </ThemeProvider>
      </ProgressProvider>
    </AuthProvider>
  );
};

export default App;
