'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { FilterBar } from '@/components/FilterBar';
import { NFTCard } from '@/components/NFTCard';
import { CollectionCard } from '@/components/CollectionCard';
import { mockNFTs, mockCollections } from '@/lib/mock-data';
import { Sparkles, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      
      <div className="lg:pl-64">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="mb-8 p-8 rounded-lg gradient-border">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-accent" size={24} />
              <h2 className="text-3xl font-bold">Discover Amazing NFTs</h2>
            </div>
            <p className="text-muted text-lg">
              Explore curated collections from your Farcaster community on Base
            </p>
          </div>

          {/* Filters */}
          <div className="mb-6">
            <FilterBar />
          </div>

          {/* Featured Collections */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="text-accent" />
                Featured Collections
              </h2>
              <button className="text-accent hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCollections.map((collection) => (
                <CollectionCard key={collection.collectionId} collection={collection} />
              ))}
            </div>
          </section>

          {/* Trending NFTs */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Trending NFTs</h2>
              <button className="text-accent hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockNFTs.map((nft) => (
                <NFTCard key={`${nft.contractAddress}-${nft.tokenId}`} nft={nft} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
