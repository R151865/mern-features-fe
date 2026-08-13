import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login';
import ProtectedRoutes from './authGuards/ProtectedRoutes';
import AppLayout from './components/AppLayout';

import Dashboard from './components/dashboard';
import AuthPage from './components/authPage';
import RealtimePage from './components/realTime';
import CloudStoragePage from './components/cloudStoragePage';
import MediaStreamingPage from './components/mediaStreamingPage';
import AiAgentsPage from './components/aiAgentsPage';
import PerformancePage from './components/performancePage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          {/* Layout Wrapper */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/websockets" element={<RealtimePage />} />
            <Route path="/cloud-storage" element={<CloudStoragePage />} />
            <Route path="/media-streaming" element={<MediaStreamingPage />} />
            <Route path="/ai-agents" element={<AiAgentsPage />} />
            <Route path="/performance" element={<PerformancePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;