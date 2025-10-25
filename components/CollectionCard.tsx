'use client';

import { Users, Eye } from 'lucide-react';
import Image from 'next/image';
import { Collection } from '@/lib/types';

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const previewNFTs = collection.nfts.slice(0, 4);

  return (
    <div className="bg-surface rounded-lg border border-border hover:border-accent transition-all duration-300 overflow-hidden cursor-pointer group">
      {/* Collection Preview Grid */}
      <div className="grid grid-cols-2 gap-1 aspect-square overflow-hidden">
        {previewNFTs.map((nft, index) => (
          <div key={index} className="relative overflow-hidden">
            <Image
              src={nft.imageUrl}
              alt={nft.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Collection Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 truncate">{collection.name}</h3>
        <p className="text-sm text-muted mb-4 line-clamp-2">{collection.description}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted">
            <Users size={16} />
            <span>{collection.nfts.length} NFTs</span>
          </div>
          <div className="flex items-center gap-2 text-muted">
            <Eye size={16} />
            <span>
              {collection.nfts.reduce((sum, nft) => sum + nft.farcasterLikes, 0)} views
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full" />
            <span className="text-sm font-medium">@curator</span>
          </div>
          <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
