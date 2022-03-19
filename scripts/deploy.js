const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.getContractFactory("PerseusLabsNFT");
  const deployedContract = await contract.deploy();

  await deployedContract.deployed();

  console.log("Contract deployed to:", deployedContract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
