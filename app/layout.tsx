import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "NFT Socializer - Discover & Trade NFTs on Base",
  description: "Discover, curate, and trade NFTs with your Farcaster community on Base.",
  openGraph: {
    title: "NFT Socializer",
    description: "Discover, curate, and trade NFTs with your Farcaster community on Base.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
