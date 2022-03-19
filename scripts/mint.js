const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.getContractFactory("PerseusLabsNFT");
    const deployedContract = await contract.attach(process.env.DEPLOYED_CONTRACT)

    let metadataURI = "ipfs://CID";
    let [deployer] = await hre.ethers.getSigners();
    const mintTx = await deployedContract.mintWithTokenURI(deployer.address, 0, metadataURI);

    await mintTx.wait()
    console.log("Smart Contract Execution TX:", mintTx.hash)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
