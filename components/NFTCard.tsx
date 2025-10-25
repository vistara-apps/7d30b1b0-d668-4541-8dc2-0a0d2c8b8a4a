'use client';

import { Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { NFT } from '@/lib/types';

interface NFTCardProps {
  nft: NFT;
  variant?: 'compact' | 'expanded';
}

export function NFTCard({ nft, variant = 'compact' }: NFTCardProps) {
  return (
    <div className="group relative bg-surface rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={nft.imageUrl}
          alt={nft.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {nft.highestBid && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-accent/90 backdrop-blur-sm rounded-md text-xs font-semibold flex items-center gap-1">
            <TrendingUp size={12} />
            {nft.highestBid} ETH
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{nft.name}</h3>
        {variant === 'expanded' && (
          <p className="text-sm text-muted mb-3 line-clamp-2">{nft.description}</p>
        )}
        
        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-muted">Current Price</p>
            <p className="text-lg font-bold text-accent">{nft.currentPrice} ETH</p>
          </div>
        </div>

        {/* Social Stats */}
        <div className="flex items-center gap-4 text-sm text-muted">
          <div className="flex items-center gap-1">
            <Heart size={16} />
            <span>{nft.farcasterLikes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} />
            <span>{nft.farcasterCommentsCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share2 size={16} />
            <span>{nft.farcasterReposts}</span>
          </div>
        </div>
      </div>

      {/* Hover Actions */}
      <div className="absolute inset-0 bg-bg/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
        <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
          Place Bid
        </button>
        <button className="px-6 py-2 bg-surface text-fg rounded-lg hover:bg-border transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
