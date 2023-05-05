export enum ChainId {
  MAINNET = 1101,
  TESTNET = 6942069,
}

export const NETWORK_URLS: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: `https://zkevm-rpc.com`,
  [ChainId.TESTNET]: `https://testnet-rpc01.pepechaintech.com`,
}
