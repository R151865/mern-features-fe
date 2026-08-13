import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 pl-[72px] transition-all duration-300 p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {/* Active feature page renders here */}
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;