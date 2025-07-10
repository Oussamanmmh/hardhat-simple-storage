const {ethers} = require("hardhat")

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying SimpleStorage...")
  const simpleStorage = await SimpleStorage.deploy()
  await simpleStorage.waitForDeployment()
  
  console.log("SimpleStorage deployed to:", await simpleStorage.getAddress())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
