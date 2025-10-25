'use client';

import { Sparkles, TrendingUp, Flame, Star, Zap } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All', icon: Sparkles },
  { id: 'curated', label: 'Curated', icon: Star },
  { id: 'marketplace', label: 'Marketplace', icon: TrendingUp },
  { id: 'create', label: 'Create', icon: Zap },
  { id: 'trending', label: 'Trending', icon: Flame },
];

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
              isActive
                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                : 'bg-surface text-fg/70 hover:bg-[var(--color-hover)] hover:text-fg border border-[var(--color-border)]'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="font-medium">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
