# Blockchain NFT Explorer DApp

Build & Deploy a Blockchain NFT Explorer | Supports Ethereum, Binance, Polygon, Base & Celo Networks

Learn how to build and deploy a powerful Blockchain NFT Explorer from scratch, compatible with major networks like Ethereum, Binance Smart Chain, Polygon, Base, and Celo! In this tutorial, we’ll guide you through each step, covering smart contract integration, multi-network support, and optimized NFT search functionality. Perfect for developers eager to dive into blockchain technology and create a professional-grade NFT explorer for multiple networks. Subscribe for more blockchain development tutorials!. Build & Deploy a Blockchain NFT Explorer | Supports Ethereum, Binance, Polygon, Base & Celo Networks

## Project Overview

#### NodeJs & NPM Version

  NodeJs: v18.12.1 || LATEST
  NPM: 8.19.2 || LATEST
  URL: https://nodejs.org/en/download
```

#### ALCHEMY

```
  OPEN: ALCHEMY
  URL: https://www.alchemy.com/
```

#### FORMSPREE

```
  OPEN: FORMSPREE
  URL: https://formspree.io/
```
#### PACKAGE JSON

```
{
  "name": "nfts-explorer",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@formspree/react": "^2.5.1",
    "alchemy-sdk": "^3.4.7",
    "next": "13.4.13",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.10.1"
  }
}


```

#### ENV.LOCAL

```
# ALCHEMY
NEXT_PUBLIC_ALCHEMY_API = YOUR_KEY

# NETWORK
NEXT_PUBLIC_DEFAULT_NETWORK = base-sepolia


# TEST ADDRESS
# NEXT_PUBLIC_ADDRESS = 0xCc0eCD808Ce4fEd81f0552b3889656B28aa2BAe9
NEXT_PUBLIC_ADDRESS =


# FORMSPREE
NEXT_PUBLIC_FORMSPREE_API = YOUR_KEY

```
