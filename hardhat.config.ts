// import { HardhatUserConfig, task } from "hardhat/config";
// import "@typechain/hardhat";
// import '@openzeppelin/hardhat-upgrades';
import "@nomiclabs/hardhat-ethers"

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { INFURA_API_KEY, RINKEBY_PRIVATE_KEY } = require('./secrets.json');

module.exports = {
  solidity: "0.6.3",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};

