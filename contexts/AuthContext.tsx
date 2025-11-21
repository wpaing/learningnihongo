
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from session on mount
  useEffect(() => {
    const storedSession = localStorage.getItem('kanji_current_session');
    if (storedSession) {
      setUser(JSON.parse(storedSession));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const usersStr = localStorage.getItem('kanji_users');
        const users = usersStr ? JSON.parse(usersStr) : [];
        const foundUser = users.find((u: any) => u.email === email && u.password === pass);

        if (foundUser) {
          // Remove password before setting state
          const { password, ...safeUser } = foundUser;
          setUser(safeUser);
          localStorage.setItem('kanji_current_session', JSON.stringify(safeUser));
          resolve();
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 800); // Simulate network delay
    });
  };

  const loginWithSocial = async (provider: 'google' | 'facebook' | 'x') => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            // Simulate a social user
            const socialUser: User = {
                id: `social-${Date.now()}`,
                name: provider === 'google' ? 'Google User' : provider === 'facebook' ? 'Facebook User' : 'X User',
                email: `user@${provider}.com`,
                level: 'N4',
                dailyGoal: 20,
                notifications: true,
                provider: provider,
                // Add dummy avatar urls based on provider if needed
            };
            
            setUser(socialUser);
            localStorage.setItem('kanji_current_session', JSON.stringify(socialUser));
            resolve();
        }, 1000);
    });
  };

  const register = async (name: string, email: string, pass: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const usersStr = localStorage.getItem('kanji_users');
        const users = usersStr ? JSON.parse(usersStr) : [];

        if (users.find((u: any) => u.email === email)) {
          reject(new Error('Email already exists'));
          return;
        }

        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password: pass,
          level: 'N4',
          dailyGoal: 20,
          notifications: true,
          provider: 'email'
        };

        users.push(newUser);
        localStorage.setItem('kanji_users', JSON.stringify(users));
        
        // Auto login after register
        const { password, ...safeUser } = newUser;
        setUser(safeUser as User);
        localStorage.setItem('kanji_current_session', JSON.stringify(safeUser));
        resolve();
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kanji_current_session');
  };

  const updateProfile = (data: Partial<User>) => {
    if (!user) return;

    // Instant update for realtime feel
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem('kanji_current_session', JSON.stringify(updatedUser));

    // Update in the "database" (users list) if it's an email user
    const usersStr = localStorage.getItem('kanji_users');
    if (usersStr) {
      const users = JSON.parse(usersStr);
      const index = users.findIndex((u: any) => u.id === user.id);
      if (index !== -1) {
        users[index] = { ...users[index], ...data };
        localStorage.setItem('kanji_users', JSON.stringify(users));
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithSocial, register, logout, updateProfile, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
