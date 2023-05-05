/**
 *
 * https://github.com/diffusion-fi/v2-periphery/blob/main/scripts/config/config.ts
 *
 * When changing this also update: cypress/integration/contracts.ts
 *
 */

const PERIPHERY_TESTNET = {
  factory: '0x1278781f8d9C8fEd1dc983848C0a82591A53C5de',
  weth9: '0x4947d70a0d64a06f25419c28917688d9b8180f58',
  router: '0x147B1C8d318AE8680c474E3FBbFeDA231bd54309',
  mockUSDC: '0xE2911AB2c15D565f6886f1342f956f4E4A7247E1',
  multicall2: '0x58d55cd42c399ce720ba1446c645b28924b10c51',
  miniChef: '0x77a656dF2f322A2Fa7c2Ea7B9EC6094a2e7FFF98',
  diffusion: '0xd9FB44a4bbFebC87765d2A2eD0F75504DF5986C3',
}

const MAINNET_PERIPHERY = {
  factory: '0xcE87E0960f4e2702f4bFFE277655E993Ae720e84',
  weth9: '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
  router: '0xB0e83A8fC02351aAba4c9694D8d400bF0da3bD22',
  multicall2: '0x554f16d513e1eB2fDf3b8CaAAb50405415Fa405A',
  //
  minichef: '0x42D3a9DB9ea21181798b285c6F1306Fa5b194955',
  diffusion: '0xEA0B7a3256829190eA5f587509dEE953d213461c',
}

const TESTNET_STABLE_PAIRS: string[] = []

const MAINNET_STABLE_PAIRS: string[] = []

export const MAINNET = {
  ...MAINNET_PERIPHERY,
  stablePairs: MAINNET_STABLE_PAIRS,
  diffusionbar: '0x475089fd520af9FD1Fa2CD9933d5B38C07608500',
  airdrop: '0xb9A52744213eA63D57F389622e1d569Bb4705207',
}

export const TESTNET = {
  ...PERIPHERY_TESTNET,
  stablePairs: TESTNET_STABLE_PAIRS,
  airdrop: '0x2F7Ad6172388aED2017FBfA1631724F172360Ab1',
  diffusionbar: '0x601a804f0B9Da72d0c7FC9f952355Be4e6c24776',
}
