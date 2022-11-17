/**
 *
 * https://github.com/diffusion-fi/v2-periphery/blob/main/scripts/config/config.ts
 *
 * When changing this also update: cypress/integration/contracts.ts
 *
 */

const PERIPHERY_TESTNET = {
  factory: '0x81BC50a2df9cE424843e3c17110E1ab1FedCD4b8',
  weth9: '0xcc491f589B45d4a3C679016195B3FB87D7848210',
  router: '0x72bd489d3cF0e9cC36af6e306Ff53E56d0f9EFb4',
  mockUSDC: '0xc48Efe267a31b5Af4cFDb50C8457914aadB0b875',
  mockCANTO: '0xf1361Dc7DFB724bd29FE7ade0CdF9785F2Bc20E6',
  mockATOM: '0x9832169B33DC5777D3d28572f35E0a537Ff7A04C',
  mockOSMOSIS: '0x1dccd8025688e39C72f2539C6f00d77bd6678425',
  multicall2: '0x1B7c09Ac8aA1e6e1d299d9301B539A368eD4c176',
  LHS: '0x7c21d6A51d6f591A95470f1F262C9c804c4CEAc3',
  RHS: '0xD3607915d934576EcdC389E7DBc641097fd5A0dE',
  testerAddress: '0x1662BfeA0Af3515baf9DAb3f0961Dc26DD35202B',
  //0x851e5cE9fa409B731f980a5E00FA889b58D9037D
  // 0xA2c659531B15bFf2556Ea7E12D477D3C8761ACD9
  //0x95BF964f113a75a3974E8164105e6e5A8D743b87
  // 0x62154D72C202f04CA50a3Ba5630052D0348f337A
  rewardToken: '0x7e806D59528F6Fa7CCcAdb4821Dd42551113DEFc',
  secondaryRewardToken: '0x9AC19677BD6B1a3ba046C33f4D2f1952cA0e9a13',
  miniChef: '0x0fCee557E3eB94913e202eF91314f14298591a61',
  complexRewarderTime: '0x2916d2e0B675e6993250f2DB9764Cd7fD5379C04',
  diffusion: '',
}

const MAINNET_PERIPHERY = {
  factory: '0xE387067f12561e579C5f7d4294f51867E0c1cFba',
  weth9: '0x826551890Dc65655a0Aceca109aB11AbDbD7a07B',
  router: '0x6Bcf6741992C6b4c5ba4a66889FAF11858520949',
  multicall2: '0xfCD3842f85ed87ba2889b4D35893403796e67FF1',
  //
  minichef: '0x067eC87844fBD73eDa4a1059F30039584586e09d',
  diffusion: '0x3f75ceabCDfed1aCa03257Dc6Bdc0408E2b4b026',
}

const TESTNET_STABLE_PAIRS: string[] = []

const MAINNET_STABLE_PAIRS: string[] = [
  '0x35DB1f3a6A6F07f82C76fCC415dB6cFB1a7df833', // NOTE/USDT
  '0x9571997a66D63958e1B3De9647C22bD6b9e7228c', // NOTE/USDC
]

export const MAINNET = {
  ...MAINNET_PERIPHERY,
  stablePairs: MAINNET_STABLE_PAIRS,
  diffusionbar: '0x75aeE82a16BD1fB98b11879af93AB7CE055f66Da',
  airdrop: '0xb9A52744213eA63D57F389622e1d569Bb4705207',
}

export const TESTNET = {
  ...PERIPHERY_TESTNET,
  stablePairs: TESTNET_STABLE_PAIRS,
  airdrop: '0x2F7Ad6172388aED2017FBfA1631724F172360Ab1',
  diffusionbar: '0x2314D451a1A2519501119f105dd1D65D0CE4E93b',
}
