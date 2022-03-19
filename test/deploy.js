const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  let Contract;
  let deployedContract;
  let deployer;

  beforeEach(async function () {
    Contract = await ethers.getContractFactory("PerseusLabsNFT");
    [deployer] = await ethers.getSigners();

    deployedContract = await Contract.deploy();

    await deployedContract.deployed();

    console.log("Contract deployed to:", deployedContract.address);
  });

  describe("Transactions", function () {
    it("mint KIP-17 Token", async function () {
      let metadataURI = "";
      const mintTx = await deployedContract.mintWithTokenURI(deployer.address, 0, metadataURI)

      await mintTx.wait()
      console.log("Smart Contract Execution TX:", mintTx.blockHash)
    });
  });
});