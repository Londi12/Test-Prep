
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface QuizResult {
  id: string;
  quizId: string;
  quizTitle: string;
  subject: string;
  score: number;
  percentage: number;
  totalQuestions: number;
  correctAnswers: number;
  date: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  quizResults: QuizResult[];
  addQuizResult: (result: Omit<QuizResult, 'id' | 'date'>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  // Load user data from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      const storedResults = localStorage.getItem(`quizResults_${JSON.parse(storedUser).id}`);
      if (storedResults) {
        setQuizResults(JSON.parse(storedResults));
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const foundUser = users.find((u: any) => 
        u.email === email && u.password === password
      );
      
      if (foundUser) {
        // Don't store password in the active user object
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        
        // Load user's quiz results
        const storedResults = localStorage.getItem(`quizResults_${foundUser.id}`);
        if (storedResults) {
          setQuizResults(JSON.parse(storedResults));
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      if (users.some((user: any) => user.email === email)) {
        return false;
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Auto login after registration
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addQuizResult = (result: Omit<QuizResult, 'id' | 'date'>) => {
    if (!user) return;
    
    const newResult: QuizResult = {
      ...result,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    
    const updatedResults = [...quizResults, newResult];
    setQuizResults(updatedResults);
    
    // Save to localStorage
    localStorage.setItem(`quizResults_${user.id}`, JSON.stringify(updatedResults));
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    quizResults,
    addQuizResult
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
