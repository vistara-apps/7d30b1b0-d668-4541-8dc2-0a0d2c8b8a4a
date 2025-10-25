'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { NFTCard } from '@/components/NFTCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FeaturedSection } from '@/components/FeaturedSection';
import { mockNFTs, mockCollections } from '@/lib/mock-data';
import { TrendingUp, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      
      <div className="ml-64">
        <Header />
        
        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Featured Section */}
          <FeaturedSection />

          {/* Trending Collections */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-accent" size={24} />
                <h2 className="text-2xl font-bold">Trending Collections</h2>
              </div>
              <button className="text-accent hover:text-accent/80 font-medium transition-colors">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCollections.map((collection) => (
                <CollectionCard key={collection.collectionId} collection={collection} />
              ))}
            </div>
          </section>

          {/* Discover NFTs */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent" size={24} />
                <h2 className="text-2xl font-bold">Discover NFTs</h2>
              </div>
              <div className="flex items-center gap-3">
                <select className="bg-surface border border-border rounded-lg px-4 py-2 text-fg focus:outline-none focus:border-accent transition-colors">
                  <option>Recently Added</option>
                  <option>Most Liked</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockNFTs.map((nft) => (
                <NFTCard key={`${nft.contractAddress}-${nft.tokenId}`} nft={nft} />
              ))}
            </div>
          </section>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="bg-surface hover:bg-accent border border-border hover:border-accent text-fg hover:text-white px-8 py-3 rounded-lg font-medium transition-all">
              Load More NFTs
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
