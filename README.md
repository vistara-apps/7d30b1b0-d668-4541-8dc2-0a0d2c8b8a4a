# NFT Socializer - Base Mini App

A social-first NFT discovery and trading experience built on Base, leveraging Farcaster's social graph.

## Features

- 🎨 **Community-Curated Collections**: Create and share themed NFT collections
- 💬 **Social Proof**: View Farcaster likes, reposts, and comments on NFTs
- 💰 **Gasless Bidding**: Place bids with gas sponsorship via Paymaster
- 🖼️ **Asset Management**: Manage your NFTs and track upcoming drops
- 🔗 **Farcaster Integration**: Seamless sharing and notifications

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

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
├── globals.css         # Global styles with BASE theme
components/
├── Sidebar.tsx         # Navigation sidebar
├── Header.tsx          # Search and category filters
├── NFTCard.tsx         # NFT display card
├── CollectionCard.tsx  # Collection preview card
├── FeaturedSection.tsx # Featured content banner
lib/
├── types.ts            # TypeScript interfaces
├── mock-data.ts        # Sample NFT data
public/
└── .well-known/
    └── farcaster.json  # Farcaster manifest
```

## Key Components

### OnchainKit Integration
- Wallet connection and management
- Transaction handling with Paymaster
- Identity resolution with Basenames

### MiniKit Features
- User context (FID, username, pfp)
- Frame actions (share, save, compose)
- Notifications for bids and offers

## Design System

**BASE Theme**:
- Background: Dark blue (`hsl(220, 40%, 8%)`)
- Accent: Base blue (`#0052ff`)
- Typography: System fonts with proper hierarchy
- Spacing: 4px base unit system
- Borders: Rounded with 6-16px radius

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
