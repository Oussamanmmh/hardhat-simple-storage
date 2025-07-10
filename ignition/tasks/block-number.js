const {task} = require("hardhat/config");

task("block-number","Prints the cureent block number")
.setAction(
    async(taskSrgs, hre)=>{
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`);
    }
)
