const { expect } = require("chai") 

const { ethers } = require("hardhat") 
// Importing ethers lib from hardhat lib
// destructuring ethers from hardhat
// Taking ethers part of hardhat library and assigning it to a variable

const tokens = (n) => {
    // Converts a number to a BigNumber representing the specified number of tokens
    return ethers.utils.parseUnits(n.toString(), 'ether')
}
// Converts a number to a BigNumber with 18 decimal places
// This is used to handle token amounts in tests

describe('Token', () => {
    let token

    beforeEach(async () => {
        // Loads the compiled Token.sol contract (ABI + bytecode) from artifacts
        // Sets up a contract factory to deploy new instances
        const Token = await ethers.getContractFactory('Token')

        // Deploys a new contract instance to Hardhat’s in-memory test blockchain
        // Sends bytecode in a transaction and gets back a contract address
        token = await Token.deploy('Dapp University', 'DAPP', '1000000')
    })

    describe('Deployment', () => {
        const name = 'Dapp University'
        const symbol = 'DAPP'
        const decimals = '18'
        const totalSupply = tokens('1000000')

    
    it('has correct name', async () => {
        // Reads the 'name()' value from the deployed contract instance
        // Verifies that the token name is 'My Token'
        expect(await token.name()).to.equal(name)
    })

    it('has correct symbol', async () => {
        expect(await token.symbol()).to.equal(symbol)
    })

    it('has correct decimals', async () => {
        expect(await token.decimals()).to.equal(decimals)
    })

    it('has correct total supply', async () => {
        // Reads the 'totalSupply()' value from the deployed contract instance
        // Verifies that the total supply is 1 million tokens

        expect(await token.totalSupply()).to.equal(totalSupply)
    })

})

})




