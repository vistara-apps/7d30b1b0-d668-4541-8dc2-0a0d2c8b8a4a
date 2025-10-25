'use client';

import { Heart, MessageCircle, Share2, Star } from 'lucide-react';
import Image from 'next/image';
import { NFT } from '@/lib/types';

interface NFTCardProps {
  nft: NFT;
  variant?: 'compact' | 'expanded';
}

export function NFTCard({ nft, variant = 'compact' }: NFTCardProps) {
  return (
    <div className="group relative bg-surface rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer">
      {/* NFT Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={nft.imageUrl}
          alt={nft.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Quick Actions Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="flex-1 bg-accent hover:bg-accent/90 text-white py-2 rounded-lg font-medium transition-colors">
            Place Bid
          </button>
          <button className="p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-colors">
            <Share2 size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* NFT Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{nft.name}</h3>
        <p className="text-sm text-muted mb-3 line-clamp-2">{nft.description}</p>

        {/* Price & Stats */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-muted">Current Price</p>
            <p className="font-bold text-accent">{nft.currentPrice} ETH</p>
          </div>
          {nft.highestBid && (
            <div className="text-right">
              <p className="text-xs text-muted">Highest Bid</p>
              <p className="font-semibold">{nft.highestBid} ETH</p>
            </div>
          )}
        </div>

        {/* Social Stats */}
        <div className="flex items-center gap-4 pt-3 border-t border-border">
          <div className="flex items-center gap-1 text-sm text-muted">
            <Heart size={16} />
            <span>{nft.farcasterLikes}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted">
            <MessageCircle size={16} />
            <span>{nft.farcasterCommentsCount}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted">
            <Share2 size={16} />
            <span>{nft.farcasterReposts}</span>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium">
              {((nft.farcasterLikes / 100) * 4.5).toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
