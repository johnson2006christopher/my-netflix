'use client';

import { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function TopBar() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
      setCurrentDate(now.toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'short', 
        day: 'numeric' 
      }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-72 h-20 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 z-40 transition-all duration-300">
      <div className="h-full px-8 flex items-center justify-between">
        {/* Search */}
        <div className="relative w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search videos, streams, movies..."
            className="w-full h-10 pl-11 pr-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Date/Time */}
          <div className="text-right">
            <p className="text-sm font-medium text-white">{currentTime}</p>
            <p className="text-xs text-zinc-500">{currentDate}</p>
          </div>

          {/* Notifications */}
          <button className="relative p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full" />
          </button>

          {/* User Avatar */}
          <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 transition-all duration-200">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
