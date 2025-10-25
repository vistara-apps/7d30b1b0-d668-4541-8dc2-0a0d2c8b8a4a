# NFT Socializer - Base Mini App

A social-first NFT discovery and trading platform built on Base, integrated with Farcaster.

## Features

- 🎨 **Community-Curated Collections**: Create and share themed NFT collections
- 💬 **Social Proof**: View Farcaster engagement (likes, reposts, comments) for NFTs
- 💰 **Gasless Bidding**: Place bids with gas sponsorship via Paymaster
- 🖼️ **Asset Management**: View and manage your NFT portfolio
- 🔔 **Smart Notifications**: Get notified about bids, offers, and collection updates

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS with BASE theme
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Main explore page
├── providers.tsx       # OnchainKit + React Query setup
└── globals.css         # BASE theme styles

components/
├── Sidebar.tsx         # Navigation sidebar
├── Header.tsx          # Search and wallet connection
├── NFTCard.tsx         # NFT display component
├── CollectionCard.tsx  # Collection preview
└── FilterBar.tsx       # Filtering options

lib/
├── types.ts            # TypeScript interfaces
└── mock-data.ts        # Sample NFT data
```

## BASE Theme

The app uses the BASE theme with:
- Dark blue background (#0a0e1a)
- Base blue accents (#0052ff)
- Rounded borders and glass effects
- Mobile-first responsive design

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## License

MIT
