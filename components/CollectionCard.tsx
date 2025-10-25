'use client';

import { Users, Eye } from 'lucide-react';
import Image from 'next/image';
import { Collection } from '@/lib/types';

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <div className="bg-surface rounded-lg border border-border hover:border-accent transition-all duration-300 overflow-hidden cursor-pointer group">
      {/* Preview Grid */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {collection.nfts.slice(0, 3).map((nft, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src={nft.imageUrl}
              alt={nft.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{collection.name}</h3>
        <p className="text-sm text-muted mb-4 line-clamp-2">{collection.description}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted">
            <Eye size={16} />
            <span>{collection.nfts.length} items</span>
          </div>
          <div className="flex items-center gap-1 text-muted">
            <Users size={16} />
            <span>By @curator</span>
          </div>
        </div>
      </div>
    </div>
  );
}
