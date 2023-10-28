const aptosTokens = require("./tokens/aptos.json");
const avalancheTokens = require("./tokens/avalanche.json");
const bitcoinTokens = require("./tokens/bitcoin.json");
const bnbTokens = require("./tokens/bnb.json");
const arbitrumTokens = require("./tokens/arbitrum.json");
const baseTokens = require("./tokens/base.json");
const cronosTokens = require("./tokens/cronos.json");
const gnosisTokens = require("./tokens/gnosis.json");
const lineaTokens = require("./tokens/linea.json");
const scrollTokens = require("./tokens/scroll.json");
const starknetTokens = require("./tokens/starknet.json");
const zksyncTokens = require("./tokens/zksync.json");
const polygonZkEvmTokens = require("./tokens/polygon-zkevm.json");
const optimismTokens = require("./tokens/optimism.json");
const polygonTokens = require("./tokens/polygon.json");
const solanaTokens = require("./tokens/solana.json");
const suiTokens = require("./tokens/sui.json");
const seiTokens = require("./tokens/sei.json");
const getEthereumTokens = require("./helpers/evm/getEthereumTokens");
const getEvmTokensFromCoingecko = require("./helpers/evm/getEvmTokensFromCoingecko");

const tokenGenerators = {
  aptos: () => aptosTokens,
  avalanche: () => getEvmTokensFromCoingecko("avalanche", avalancheTokens),
  bitcoin: () => bitcoinTokens,
  bnb: () => getEvmTokensFromCoingecko("bnb", bnbTokens),
  arbitrum: () => arbitrumTokens,
  base: () => baseTokens,
  cronos: () => cronosTokens,
  gnosis: () => gnosisTokens,
  linea: () => lineaTokens,
  scroll: () => scrollTokens,
  starknet: () => starknetTokens,
  zksync: () => zksyncTokens,
  "polygon-zkevm": () => polygonZkEvmTokens,
  ethereum: getEthereumTokens,
  optimism: () => getEvmTokensFromCoingecko("optimism", optimismTokens),
  polygon: () => getEvmTokensFromCoingecko("polygon", polygonTokens),
  solana: () => solanaTokens,
  sui: () => suiTokens,
  sei: () => seiTokens,
};

module.exports = async function generateTokens(networkId, args) {
  const tokenGenerator = tokenGenerators[networkId];
  if (!tokenGenerator) throw new Error(`Generator is missing: ${networkId}`);
  return tokenGenerator(...args);
};
