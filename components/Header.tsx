'use client';

import { Search, Bell, Bookmark, User } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'curate', label: 'Curate', icon: '🎨' },
  { id: 'marketplace', label: 'Marketplace', icon: '🏪' },
  { id: 'create', label: 'Create', icon: '✨' },
  { id: 'marketplace2', label: 'Marketplace', icon: '🛍️' },
  { id: 'collab', label: 'Collab', icon: '🤝' },
];

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('curate');

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
              <input
                type="text"
                placeholder="NFT collections"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg border border-border rounded-lg pl-12 pr-4 py-3 text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-bg transition-colors">
              <Bell size={20} className="text-muted" />
            </button>
            <button className="p-2 rounded-lg hover:bg-bg transition-colors">
              <Bookmark size={20} className="text-muted" />
            </button>
            <button className="p-2 rounded-lg bg-accent hover:bg-accent/90 transition-colors">
              <User size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-bg text-muted hover:bg-surface hover:text-fg'
              }`}
            >
              <span>{category.icon}</span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
