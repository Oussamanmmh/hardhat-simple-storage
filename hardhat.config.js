require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./ignition/tasks/block-number")

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL 
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    sepolia:{
        url: SEPOLIA_RPC_URL,
        accounts:[PRIVATE_KEY],
        chainId: 11155111,

    }
  },
  solidity: "0.8.28",
};


