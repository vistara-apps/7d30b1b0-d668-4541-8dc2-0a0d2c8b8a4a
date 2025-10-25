'use client';

import { Filter, TrendingUp, Clock, DollarSign } from 'lucide-react';

const filters = [
  { icon: TrendingUp, label: 'Trending' },
  { icon: Clock, label: 'Recent' },
  { icon: DollarSign, label: 'Price: Low to High' },
  { icon: Filter, label: 'All Filters' },
];

export function FilterBar() {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2">
      {filters.map((filter) => {
        const Icon = filter.icon;
        return (
          <button
            key={filter.label}
            className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg hover:border-accent transition-colors whitespace-nowrap"
          >
            <Icon size={16} />
            <span className="text-sm font-medium">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}
