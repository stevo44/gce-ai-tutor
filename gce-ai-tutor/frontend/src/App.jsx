import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/layout/DashboardLayout';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/DashboardPage';
import TopicMasteryPage from './pages/TopicMasteryPage';
import QuizPage from './pages/QuizPage';
import InsightsPage from './pages/InsightsPage';
import ChatPage from './pages/ChatPage';
import PastPapersPage from './pages/PastPapersPage';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/welcome" element={<ProtectedRoute><WelcomePage /></ProtectedRoute>} />

            <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/topics" element={<TopicMasteryPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/past-papers" element={<PastPapersPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
