'use client';

import { Home, Plus, Store, User, Image } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: Home, label: 'Explore', href: '/' },
  { icon: Plus, label: 'Create', href: '/create' },
  { icon: Store, label: 'Marketplace', href: '/marketplace' },
  { icon: Image, label: 'My NFTs', href: '/my-nfts' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface border-r border-border p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-accent flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">N</span>
          </div>
          NFTix
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-accent text-white'
                  : 'text-muted hover:bg-surface hover:text-fg'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-border">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted hover:bg-surface hover:text-fg transition-all">
          <div className="w-8 h-8 bg-accent rounded-full" />
          <span className="font-medium">@username</span>
        </button>
      </div>
    </aside>
  );
}
