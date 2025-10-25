export interface User {
  fid: string;
  username: string;
  displayName: string;
  pfpUrl?: string;
  custodyAddress?: string;
  walletAddress?: string;
}

export interface NFT {
  contractAddress: string;
  tokenId: string;
  name: string;
  description: string;
  imageUrl: string;
  ownerAddress: string;
  currentPrice?: string;
  highestBid?: string;
  farcasterLikes: number;
  farcasterReposts: number;
  farcasterCommentsCount: number;
}

export interface Collection {
  collectionId: string;
  name: string;
  description: string;
  curatorFid: string;
  isPublic: boolean;
  createdAt: string;
  nfts: NFT[];
}

export interface NFTBid {
  bidId: string;
  nftContractAddress: string;
  tokenId: string;
  bidderFid: string;
  amount: string;
  status: 'pending' | 'accepted' | 'rejected';
  timestamp: string;
}
