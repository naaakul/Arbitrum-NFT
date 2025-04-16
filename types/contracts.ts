export interface LaunchpadConfig {
    price: bigint;
    maxSupply: bigint;
    currentSupply: bigint;
    isActive: boolean;
    creator: `0x${string}`;
  }
  
  export interface NFTLaunchpadContract {
    createLaunchpad: (price: bigint, maxSupply: bigint) => Promise<{ 
      hash: `0x${string}`;
      wait: () => Promise<{ launchpadId: bigint }>; 
    }>;
    
    mint: (launchpadId: bigint, tokenUri: string, value: bigint) => Promise<{ 
      hash: `0x${string}`;
      wait: () => Promise<{ tokenId: bigint }>;
    }>;
    
    toggleLaunchpad: (launchpadId: bigint) => Promise<{
      hash: `0x${string}`;
      wait: () => Promise<{ isActive: boolean }>;
    }>;
    
    getLaunchpadConfig: (launchpadId: bigint) => Promise<LaunchpadConfig>;
    
    tokenUri: (tokenId: bigint) => Promise<string>;
    
    ownerOf: (tokenId: bigint) => Promise<`0x${string}`>;
    
    balanceOf: (owner: `0x${string}`) => Promise<bigint>;
  }