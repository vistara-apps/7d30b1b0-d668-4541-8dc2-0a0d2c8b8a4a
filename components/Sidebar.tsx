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
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface border-r border-border p-6 hidden lg:block">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
          <span className="text-2xl">🎨</span>
        </div>
        <h1 className="text-xl font-bold">NFT Socializer</h1>
      </div>

      <nav className="space-y-2">
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
    </aside>
  );
}
