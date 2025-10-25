'use client';

import { useEffect, useState } from 'react';
import { Search, Bell, User, Home, Plus, TrendingUp, Sparkles } from 'lucide-react';
import { NFTGrid } from './components/NFTGrid';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-shimmer w-32 h-32 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <Header />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Category Filter */}
            <CategoryFilter />

            {/* Featured Section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-accent" />
                  Featured Collections
                </h2>
                <button className="text-accent hover:text-secondary transition-colors text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeaturedCard
                  title="Cosmic Creatures"
                  curator="@cryptoartist"
                  items={12}
                  image="/api/placeholder/400/300"
                />
                <FeaturedCard
                  title="Digital Dreams"
                  curator="@nftcollector"
                  items={8}
                  image="/api/placeholder/400/300"
                />
              </div>
            </section>

            {/* Trending NFTs */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  Trending NFTs
                </h2>
              </div>
              <NFTGrid />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function FeaturedCard({ title, curator, items, image }: {
  title: string;
  curator: string;
  items: number;
  image: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-surface border border-[var(--color-border)] hover:border-accent transition-all duration-300 cursor-pointer">
      <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-secondary">{curator}</span>
            <span className="text-fg/70">{items} items</span>
          </div>
        </div>
      </div>
    </div>
  );
}
