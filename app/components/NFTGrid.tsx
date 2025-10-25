'use client';

import { Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';

const mockNFTs = [
  { id: 1, name: 'Cosmic Dragon', price: '0.5 ETH', likes: 142, comments: 23 },
  { id: 2, name: 'Crystal Guardian', price: '0.8 ETH', likes: 256, comments: 45 },
  { id: 3, name: 'Neon Spirit', price: '0.3 ETH', likes: 89, comments: 12 },
  { id: 4, name: 'Mystic Warrior', price: '1.2 ETH', likes: 312, comments: 67 },
  { id: 5, name: 'Pixel Phoenix', price: '0.6 ETH', likes: 178, comments: 34 },
  { id: 6, name: 'Cyber Samurai', price: '0.9 ETH', likes: 234, comments: 56 },
  { id: 7, name: 'Galaxy Explorer', price: '0.4 ETH', likes: 123, comments: 28 },
  { id: 8, name: 'Dream Weaver', price: '0.7 ETH', likes: 198, comments: 41 },
];

export function NFTGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {mockNFTs.map((nft) => (
        <NFTCard key={nft.id} {...nft} />
      ))}
    </div>
  );
}

function NFTCard({ name, price, likes, comments }: {
  name: string;
  price: string;
  likes: number;
  comments: number;
}) {
  return (
    <div className="group bg-surface rounded-lg overflow-hidden border border-[var(--color-border)] hover:border-accent transition-all duration-300 cursor-pointer animate-fade-in">
      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-accent/20 via-secondary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-surface/90 backdrop-blur-sm rounded-lg hover:bg-accent transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2 bg-surface/90 backdrop-blur-sm rounded-lg hover:bg-accent transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Trending Badge */}
        <div className="absolute top-3 left-3">
          <span className="flex items-center gap-1 px-2 py-1 bg-accent/90 backdrop-blur-sm rounded-md text-xs font-medium">
            <TrendingUp className="w-3 h-3" />
            Trending
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 truncate">{name}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-accent font-bold">{price}</span>
          <div className="flex items-center gap-3 text-sm text-fg/70">
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              {comments}
            </span>
          </div>
        </div>

        <button className="w-full py-2 bg-accent hover:bg-accent/90 rounded-lg font-medium transition-colors">
          Place Bid
        </button>
      </div>
    </div>
  );
}
