# NFT Socializer - Base Mini App

A social-first NFT discovery and trading experience built on Base, leveraging Farcaster's social graph.

## Features

- 🎨 Community-curated NFT collections
- 💬 Social proof & reputation for NFTs
- 🔥 Frame-native instant bids & offers
- 💰 Gasless mints with Paymaster
- 🌐 Farcaster integration with MiniKit

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS with BASE theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/       # Reusable UI components
├── layout.tsx       # Root layout with providers
├── page.tsx         # Home page
├── providers.tsx    # OnchainKit & React Query providers
└── globals.css      # Global styles with BASE theme

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Base Mini App Integration

This app is configured as a Farcaster Mini App with:
- OnchainKit for wallet and transactions
- MiniKit for Farcaster social features
- BASE theme with dark blue background and Base blue accents
- Gasless transactions via Paymaster

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster Mini Apps](https://docs.farcaster.xyz/developers/frames/v2/mini-apps)

## License

MIT
