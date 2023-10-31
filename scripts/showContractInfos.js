// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

require("dotenv").config();

async function main() {

  
  const proxy_address = process.env.CONST_PROXY_ADDRESS
  console.log('proxy_address', proxy_address)

  const implementation_address = await upgrades.erc1967.getImplementationAddress(proxy_address)
  const admin_address = await upgrades.erc1967.getAdminAddress(proxy_address)

  // KAM Coin
  const coin = await hre.ethers.getContractAt("KamiCoin", proxy_address);
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
