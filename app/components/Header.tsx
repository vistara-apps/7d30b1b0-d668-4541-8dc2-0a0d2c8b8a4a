'use client';

import { Search, Bell, Wallet } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-10 bg-surface/80 backdrop-blur-lg border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-fg/50" />
              <input
                type="text"
                placeholder="Search NFTs, collections, or creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-bg border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-accent transition-colors text-fg placeholder:text-fg/50"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 ml-4">
            <button className="p-2 hover:bg-[var(--color-hover)] rounded-lg transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 rounded-lg transition-colors font-medium">
              <Wallet className="w-5 h-5" />
              <span className="hidden sm:inline">Connect</span>
            </button>

            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}
