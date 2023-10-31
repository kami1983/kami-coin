// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

require("dotenv").config();

async function main() {
  const COIN_OWNER = process.env.COIN_OWNER
  const COIN_TOTAL_SUPPLY = process.env.COIN_TOTAL_SUPPLY
  
  // KAM Coin
  const KamiCoin = await ethers.getContractFactory("KamiCoin");
  const coin = await upgrades.deployProxy(KamiCoin, ["KAM Coin", "KAM", COIN_OWNER, COIN_TOTAL_SUPPLY], { initializer: 'initialize' });
  await coin.deployed();

  const proxy_address = coin.address
  const implementation_address = await upgrades.erc1967.getImplementationAddress(proxy_address)
  const admin_address = await upgrades.erc1967.getAdminAddress(proxy_address)
  const implement_version = await coin.impVersion()

  console.log(`EcoProofCard Proxy Address: ${proxy_address}`)
  console.log(`EcoProofCard Implementation Address: ${implementation_address}`)
  console.log(`EcoProofCard Admin Address: ${admin_address}`)
  console.log('EcoProofCard Implementation Version: ', implement_version.toString())

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
