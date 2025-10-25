'use client';

import { Home, Compass, Plus, ShoppingBag, User, Image, Flame } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: Home, label: 'Explore', active: true },
  { icon: Plus, label: 'Create', active: false },
  { icon: ShoppingBag, label: 'Marketplace', active: false },
  { icon: Image, label: 'My NFTs', active: false },
  { icon: User, label: 'Profile', active: false },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Explore');

  return (
    <aside className="w-64 bg-surface border-r border-[var(--color-border)] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">NFTix</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'text-fg/70 hover:bg-[var(--color-hover)] hover:text-fg'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-[var(--color-border)]">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-hover)] cursor-pointer transition-colors">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary" />
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">@username</p>
            <p className="text-sm text-fg/50 truncate">0x1234...5678</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
