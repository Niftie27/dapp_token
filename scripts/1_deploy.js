const { ethers } = require("hardhat");

async function main() {
    const Token = await ethers.getContractFactory("Token");
    // The `getContractFactory` function is used to get a contract factory for the Token contract.
    // The `Token` contract is assumed to be defined in the contracts directory.
    const token = await Token.deploy("Dapp University", "DAPPU", "1000000");
    // The `deploy` function is used to deploy a new contract instance.
    // The `deploy` function returns a promise that resolves to the deployed contract instance.
    await token.deployed();
    // The `deployed` function is used to wait for the contract to be deployed.
    console.log(`Token deployed to: ${token.address}`);
    // The `console.log` function is used to print the address of the deployed contract.
    // The `address` property of the contract instance contains the address of the deployed contract.
    // The `address` property is a string that contains the address of the deployed contract.
    // The `address` property is used to interact with the deployed contract.
    // The `address` property is used to get the address of the deployed contract.
    // The `address` property is used to get the address of the deployed contract instance.
}



// The `console.log` function is used to print the address of the deployed contract.
// The `main` function is an asynchronous function that deploys the Token contract.
// The `main` function is the entry point of the script.
// The `ethers` object is used to interact with the Ethereum blockchain.
// The `ethers` object is provided by the Hardhat environment and is used to interact with the Ethereum blockchain.


main()
    .then(() => process.exit(0))
    // The `then` method is used to handle the promise returned by the `main` function.
    // The `process.exit(0)` method is used to exit the process with a success code.
    // The `catch` method is used to handle any errors that occur during the execution of the `main` function.
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// The `catch` method is used to handle any errors that occur during the execution of the `main` function.
// The `process.exit(1)` method is used to exit the process with an error code.