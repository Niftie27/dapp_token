// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("Lock"); 
  // importing the Lock contract
  // The contract factory is an abstraction used to deploy new smart contracts,
  // so Lock here is a factory for instances of our Lock contract.
  // We can also use `hre.ethers.getContractAt` to get an instance of a deployed contract.
  // The `getContractFactory` function is used to get a contract factory for the Lock contract.
  // The `getContractAt` function is used to get an instance of a deployed contract.
  // The `getContractFactory` function returns a promise that resolves to a contract factory.
  // The `getContractAt` function returns a promise that resolves to a contract instance.
  // The `getContractFactory` function takes the contract name as a parameter.
  // The `getContractAt` function takes the contract name and address as parameters.
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount }); 
  // deploying the contract
  // The `deploy` function is used to deploy a new contract instance.
  // The `deploy` function takes the constructor arguments as parameters.
  // The `deploy` function returns a promise that resolves to the deployed contract instance.

  await lock.deployed();

  console.log("Lock with 1 ETH deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
