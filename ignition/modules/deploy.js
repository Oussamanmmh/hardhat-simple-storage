const {ethers , network} = require("hardhat")

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying SimpleStorage...")
  const simpleStorage = await SimpleStorage.deploy()
  await simpleStorage.waitForDeployment()

   if (network.config.chainId ===11155111  && process.env.PRIVATE_KEY) {
    console.log("Waiting for block confirmations...")
    await simpleStorage.waitForDeployment()
    await verify(await simpleStorage.getAddress(), [])
  }
  
  console.log("SimpleStorage deployed to:", await simpleStorage.getAddress())
  const currentValue = await simpleStorage.retrieve() ;
  console.log("Current Value is: ", currentValue.toString())

   await simpleStorage.store(7)
   await simpleStorage.waitForDeployment(1)
   console.log("the current value now is : " , (await simpleStorage.retrieve()).toString())

}

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
