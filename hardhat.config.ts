import "dotenv/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

import { HardhatUserConfig } from 'hardhat/types';

// @ts-ignore
const config: HardhatUserConfig = {
  solidity: {
    version: '0.5.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
  networks: {
    hardhat: {},
    cypress: {
      url: 'https://kaikas.cypress.klaytn.net:8651',
      httpHeaders: {
        'Authorization': 'Basic ' + Buffer.from(process.env.ACCESS_KEY_ID + ':' + process.env.SECRET_ACCESS_KEY).toString('base64'),
        'x-chain-id': '8217',
      },
      accounts: [
        process.env.DEPLOYER || ''
      ],
      chainId: 8217,
      gas: 3000000,
    },
    baobab: {
      url: 'https://kaikas.baobab.klaytn.net:8651',
      httpHeaders: {
        'Authorization': 'Basic ' + Buffer.from(process.env.ACCESS_KEY_ID + ':' + process.env.SECRET_ACCESS_KEY).toString('base64'),
        'x-chain-id': '1001',
      },
      accounts: [
        process.env.DEPLOYER || ''
      ],
      chainId: 1001,
      gas: 3000000,
    },
  },
  mocha: {
    timeout: 100000
  }
}

export default config;
