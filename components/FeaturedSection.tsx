'use client';

import { TrendingUp } from 'lucide-react';
import Image from 'next/image';

export function FeaturedSection() {
  return (
    <div className="relative rounded-lg overflow-hidden gradient-border p-6 mb-8">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-accent mb-2">
            <TrendingUp size={20} />
            <span className="text-sm font-semibold uppercase tracking-wide">Featured</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Cosmic Collection</h2>
          <p className="text-muted mb-6 max-w-lg">
            Explore the most trending NFT collection this week. Curated by top collectors
            in the Farcaster community.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Explore Collection
            </button>
            <button className="border border-border hover:border-accent text-fg px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative w-64 h-64 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop"
            alt="Featured NFT"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
