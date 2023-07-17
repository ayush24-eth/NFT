const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.deployContract("NFT");

  await NFT.waitForDeployment();

  console.log(`MyToken contract deployed to ${NFT.target}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
