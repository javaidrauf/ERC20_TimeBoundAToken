// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ERC20_TimeBoundAToken = await hre.ethers.getContractFactory("ERC20_TimeBoundAToken");
  const eRC20_TimeBoundAToken = await ERC20_TimeBoundAToken.deploy();

  await eRC20_TimeBoundAToken.deployed();

  console.log("ERC20_TimeBoundAToken deployed to:", eRC20_TimeBoundAToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // deployed address: 0xAD7D96127162b6d0771B095f09ad66DcA7C60240
