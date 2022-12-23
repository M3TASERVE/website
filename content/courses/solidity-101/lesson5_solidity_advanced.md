---
title: '🕮 Lesson 5 -  Solidity standards'
version: '✔️ v1.0'
slug: "standards"
number: 5
menu:
  courses:
    parent: "Solidity 101"
weight: 25
toc: true
---

<!--
## Table of contents
- [What are EIP and ERC?](#what-are-eip-and-erc)
- [Conclusion](#conclusion)
-->

# What are EIP and ERC?

`ERC` stands for `Ethereum Request for Comment`. Essentially, they are standards that have been approved by the community and are used to convey technical requirements and specifications for certain use cases.
The first standard was introduced in November 2015 by Fabian Vogelsteller as an Ethereum Request for Comments (ERC). It was automatically assigned GitHub issue number 20, giving rise to the name "ERC20 token." 
The vast majority of tokens are currently based on the ERC20 standard. The ERC20 request for comments eventually became `Ethereum Improvement Proposal` 20 (EIP-20), but it is mostly still referred to by the original name, ERC20.

ERC20 is a standard for fungible tokens, meaning that different units of an ERC20 token are interchangeable and have no unique properties.
A fungible token is one in which all 'parts' of the token are the same. Exchanging 1 ETH for a different 1 ETH doesn't change anything. You still have 1 ETH. Therefore, ETH is a fungible token. All fiat currency is also fungible. 
NFTs are examples of Non-Fungible Tokens (more on this later) where each token is different from a different token.

For example, decentralized exchanges like [Uniswap](https://uniswap.org/) allow you to swap any token for any other token. This is only possible because pretty much all tokens follow the `ERC-20` standard, so Uniswap could write code which works with all tokens following the standard.

The ERC20 standard defines a common interface for contracts implementing a token, such that any compatible token can be accessed and used in the same way. The interface consists of a number of functions that must be present in every implementation of the standard, as well as some optional functions and attributes that may be added by developers.

Example: ERC20 interface defined in Solidity:
```
contract ERC20 {
   function totalSupply() constant returns (uint theTotalSupply);
   function balanceOf(address _owner) constant returns (uint balance);
   function transfer(address _to, uint _value) returns (bool success);
   function transferFrom(address _from, address _to, uint _value) returns
      (bool success);
   function approve(address _spender, uint _value) returns (bool success);
   function allowance(address _owner, address _spender) constant returns
      (uint remaining);
   event Transfer(address indexed _from, address indexed _to, uint _value);
   event Approval(address indexed _owner, address indexed _spender, uint _value);
}
```

<div style="width: 800px; margin-bottom: 22px; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 600px;" title="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol"><code>
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";</code>
</div>

The `ERC-20` token standard is now referenced in the library of standards [OpenZeppelin](https://openzeppelin.com/) (OZ). 
OZ is an Ethereum security company. Among other things, OZ develops reference contracts for popular smart contract standards which are thoroughly tested and secure. Whenever implementing a smart contract which needs to comply with a standard, try to find an OZ reference implementation rather than rewriting the entire standard from scratch.

You can look at the implementation of `ERC-20` standard contract if you want by following the link: [https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)

You can also llok at the NFT standard [Openzeppelin's ERC721 Contract](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol). ERC721 is the most common standard for creating NFT's.
All standards can be imported in a Smart Contract as follow:
```js
// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
```

# Conclusion

In this lesson, we learn more advanced solidity concepts to develop Smart Contract. Next lesson is an hands-on to apply those concepts.


<!--

fungible VS non-fungible


Show one hack:
https://consensys.github.io/smart-contract-best-practices/attacks/reentrancy/

One of the major dangers of calling external contracts is that they can take over the control flow, and make changes to your data that the calling function wasn't expecting.

This bug involves functions that could be called repeatedly, before the first invocation of the function is finished.

In our case, the attack can occur within the invocation of the _refund_ function.

Since the user's balance is not set to 0 until the very end of the function, the second (and later) invocations will still succeed, and will withdraw the balance over and over again.

In the _attack_ function, the user has to send ether first in order to set his balance in the mapping, but this money will be returned back to him immediately and will keep withdrawing because his balance is never reduced.


## Prefer a Video?
If you would rather learn from a video, we have a recording available of this tutorial on our YouTube. It is split into 2 parts, and there are timestamps. Watch the video by clicking on the screenshot below, or go ahead and read the tutorial!

#### Part 1
[![Part 
#1](https://raw.githubusercontent.com/LearnWeb3DAO/Advanced-Solidity-Topics/main/assets/video-preview1.webp)](https://www.youtube.com/watch?v=Z5P3rKBRmEM)
#### Part 2
[![Part 
#2](https://raw.githubusercontent.com/LearnWeb3DAO/Advanced-Solidity-Topics/main/assets/video-preview2.webp)](https://www.youtube.com/watch?v=ILY3fIbwjk0)


-------------------------------

# What are EIP and ERC?

fungible VS non-fungible

In this step-by-step tutorial, you will learn how to create and deploy an `ERC-20` token on Ethereum. 

We will use [Metamask](https://metamask.io/) and [Remix IDE](https://remix.ethereum.org/) for this tutorial.

** What is ERC-20? **

`ERC` stands for `Ethereum Request for Comment`. Essentially, they are standards that have been approved by the community and are used to convey technical requirements and specifications for certain use cases.

`ERC-20` specifically is a standard which outlines the technical specification of a fungible token. 

> A fungible token is one in which all 'parts' of the token are the same. Exchanging 1 ETH for a different 1 ETH doesn't change anything. You still have 1 ETH. Therefore, ETH is a fungible token. All fiat currency is also fungible. 

> NFTs are examples of Non-Fungible Tokens (more on this later) where each token is different from a different token.

Most tokens on Ethereum comply with the `ERC-20` specification. Following a standard like `ERC-20` allows application developers which use `ERC-20` tokens to easily support *all* `ERC-20` tokens without having to write specialized code for them individually.

For example, decentralized exchanges like [Uniswap](https://uniswap.org/) allow you to swap any token for any other token. This is only possible because pretty much all tokens follow the `ERC-20` standard, so Uniswap could write code which works with all tokens following the standard.

** Prerequisites **

- Make sure you have downloaded and installed [Metamask](https://metamask.io/). 
- Select the `Rinkeby Testnet` network to work with
- Request some testnet ether on Rinkeby through any one of the following faucets:
    - [Metamask Faucet](https://faucet.metamask.io/)
    - [Chainlink Faucet](https://faucets.chain.link/rinkeby)
    - [Paradigm Faucet](https://faucet.paradigm.xyz/)

Once you have set all of these up, let's get started!

** Writing the code **

We are using [Remix IDE](https://remix.ethereum.org/) for writing the smart contract.

In Remix, create a new contract file, I named mine `LW3Token.sol` - you can name it whatever you want!

In the contract, write the following code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract LW3Token is ERC20 {
    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, 10 * 10 ** 18);
    }
}
```

Let's break it down line-by-line and understand what is going on:

```solidity
pragma solidity ^0.8.0;
```

This line specifies the compiler version of Solidity to be used. `^0.8.0` means any version greater than `0.8.0`. Usually, you would want to use the latest Solidity compiler version, as a new version usually implies either new features or optimizations.



---


```solidity
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
```

This line imports the `ERC-20` token standard from [OpenZeppelin](https://openzeppelin.com/) (OZ). OZ is an Ethereum security company. Among other things, OZ develops reference contracts for popular smart contract standards which are thoroughly tested and secure. Whenever implementing a smart contract which needs to comply with a standard, try to find an OZ reference implementation rather than rewriting the entire standard from scratch.

You can look at the implementation of `ERC-20` standard contract if you want by following the link - [https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)

> Note: In the Sophomore track, we will take a deeper dive into the ERC-20 standard contract to understand everything that is going on within that contract.

---

```solidity
contract LW3Token is ERC20 {
    ...
}
```

This specifies a new contract, named LW3Token, in our Solidity file. Also, it says that this contract `is` an instance of `ERC20`. `ERC20` in this case refers to the standard contract we imported from OpenZeppelin. 

Essentially, we are extending the `ERC20` standard contract we imported from OpenZeppelin. So all the functions and logic that is built into `ERC20` is available for us to use, and we can add our own custom logic on top of it. 

If you are familiar with Object Oriented Programming principles, you can think of this as a class extending another class.


---

```solidity
constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
     ...
}
```

This bit has slightly weird syntax that you might not have seen before. `Kotlin` actually has some similar syntax, but I digress.

Essentially, we created `constructor` function that is called when the smart contract is first deployed. Within the constructor, we want two arguments from the user - `_name` and `_symbol` which specify the name and symbol of our cryptocurrency. Eg. name = Ethereum, symbol = ETH.

What happens after it is more interesting. Immediately after specifying the constructor function, we call `ERC20(_name, _symbol)`.

The `ERC20` contract we imported from OpenZeppelin has it's own constructor, which requires the `name` and `symbol` parameters. Since we are extending the ERC20 contract, we need to initialize the ERC20 contract when we deploy ours. So, as part of our constructor, we also need to call the constructor on the `ERC20` contract.

Therefore, we are providing `_name` and `_symbol` variables to our contract, which we immediately pass on to the `ERC20` constructor, thereby initializing the `ERC20` smart contract.


---

```solidity
_mint(msg.sender, 10 * 10 ** 18);
```

`_mint` is an `internal` function within the `ERC20` standard contract, which means that it can only be called by the contract itself. External users cannot call this function. 

Since you as the developer want to receive some tokens when you deploy this contract, we call the `_mint` function to mint some tokens to `msg.sender`.

`_mint` takes two arguments - an address to mint to, and the amount of tokens to mint

`msg.sender` is a global variable injected by the Ethereum Virtual Machine, which is the address which made this transaction. Since you will be the one deploying this contract, your address will be there in `msg.sender`. 

`10 * 10 ** 18` specifies that you want 10 full tokens to be minted to your address.


---

> Note: You might be wondering why we did not just write `10` in the amount, instead of `10 ** 18` (which is actually 10 ^ 18).

Essentially, Solidity does not support floating point numbers - that is decimals. Also, since ERC20 tokens deal with money, using floating point numbers is a bad idea.

As an example, consider the simple calculation `(1/3) * 3` in a language that supports floating point numbers. What do you think this returns? 

If you thought it would return 1, you are wrong.

Due to inaccuracies in floating point calculations, since computers cannot represent an infinite number of digits, `(1/3) * 3` actually yields something like `0.999999999`.

As such, when representing financial currencies, decimals are not used due to calculation errors. As an alternative, we represent every currency as an amount relative to the smallest indivisible part of that currency. For example, $1 is represented as 100 cents, since you can't get smaller than 1 cent when dealing with USD. In that numbering system, 1 cent is just 1, not 0.01. $0.33 is represented as 33, not (1/3). 

`ERC20` tokens by default work with 18 decimal places. So 1 full `LW3Token` in this case, is actually represented as `10 ^ 18`. Therefore, to get 10 full `LW3Tokens`, we use `10 * 10 ** 18`.


---

** Compiling **

Compile your contract by either pressing Save (CTRL + S on Windows, Command + S on Mac), or by going over to the `Compiler` tab in Remix, selecting `LW3Token.sol`, and hitting `Compile`.

![](https://i.imgur.com/grMZBw5.png)

** Deploying **

Head over to the `Deployer` tab in Remix.

Select the `Injected Web3` environment (ensure you are on the Rinkeby Test Network), and connect your Metamask wallet.

Select the `LW3Token.sol` contract, and enter values for the constructor arguments `_name` and `_symbol`.

![](https://i.imgur.com/HvWLfZq.png)

Click `Transact` and approve the transaction from Metamask to deploy your contract!

![](https://i.imgur.com/rvBbYl4.png)

When deployed, the contract should show up under the `Deployed Contracts` section. Click the `Copy Address` button to copy the contract address.

![](https://i.imgur.com/19haj2L.png)

Go to [Rinkeby Etherscan](https://rinkeby.etherscan.io/) and search for your contract address and you should see it there!

** Viewing Tokens in Metamask **
You may notice that even though you minted tokens to your address, they don't show up in Metamask.

This is because Metamask cannot detect random ERC20 token balances (since there are literally hundreds of thousands of them). They have a list of the most well known ERC20 tokens that they can show automatically, but apart from that, for your own tokens, you will usually need to tell Metamask to add it to your wallet manually.

To do so:
- Copy your contract address
- Open Metamask and click `Import Tokens` in the `Assets` tab
- ![](https://i.imgur.com/XxKFtU0.png)
- Enter your Token Contract Address, and it should detect the name and number of decimals automatically
- Click Add, and you will see your balance in Metamask!
- ![](https://i.imgur.com/Wwxe0kg.png)

------------------------


## Write NFT Contract Code

Lets install Open Zeppelin contracts, In the terminal window execute this command

```
npm install @openzeppelin/contracts
```

- In the contracts folder, create a new solidity file called NFTee.sol
- Now we would write some code in the NFTee.sol file. We would be importing [Openzeppelin's ERC721 Contract](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol). ERC721 is the most common standard for creating NFT's. In the freshman track, we would only be using ERC721. In the sophomore track, you would learn more about ERC721's in detail.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// GameItem is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract GameItem is ERC721 {

    constructor() ERC721("GameItem", "ITM") {
        // mint an NFT to yourself
        _mint(msg.sender, 1);
    }
}
```

- Compile the contract, open up a terminal and execute these commands

```bash
npx hardhat compile
```

## Configuring Deployment

- Lets deploy the contract to `rinkeby` network. First, create a new file named `deploy.js` under `scripts` folder

- Now we would write some code to deploy the contract in `deploy.js` file.

```js
// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
  const nftContract = await ethers.getContractFactory("GameItem");

  // here we deploy the contract
  const deployedNFTContract = await nftContract.deploy();

  // print the address of the deployed contract
  console.log("NFT Contract Address:", deployedNFTContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

- Now create a `.env` file in the `NFT-Tutorial` folder and add the following lines. Use the instructions in the comments to get your Alchemy API Key and RINKEBY Private Key. Make sure that the account from which you get your rinkeby private key is funded with Rinkeby Ether.You can get some here: [https://www.rinkebyfaucet.com/](https://www.rinkebyfaucet.com/)

```

# Go to https://www.alchemyapi.io, sign up, create
# a new App in its dashboard and select the network as Rinkeby, and replace "add-the-alchemy-key-url-here" with its key url
ALCHEMY_API_KEY_URL="add-the-alchemy-key-url-here"

# Replace this private key with your RINKEBY account private key
# To export your private key from Metamask, open Metamask and
# go to Account Details > Export Private Key
# Be aware of NEVER putting real Ether into testing accounts
RINKEBY_PRIVATE_KEY="add-the-rinkeby-private-key-here"

```

You can think of Alchemy as AWS EC2 for blockchain. It is a node provider. It helps us to connect with the blockchain by providing us with nodes so that we can read and write to the blockchain. Alchemy is what helps us deploy the contract to rinkeby.

- Now we would install `dotenv` package to be able to import the env file and use it in our config.
  In your terminal, execute these commands.
  ```bash
  npm install dotenv
  ```
- Now open the hardhat.config.js file, we would add the `rinkeby` network here so that we can deploy our contract to rinkeby. Replace all the lines in the `hardhat.config.js` file with the given below lines

```js
require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
```

- To deploy in your terminal type:
  ```bash
      npx hardhat run scripts/deploy.js --network rinkeby
  ```
- Save the NFT Contract Address that was printed on your terminal in your notepad, you would need it.

## Verify on Etherscan

- Go to [Rinkeby Etherscan](https://rinkeby.etherscan.io/) and search for the address that was printed.
- If the `address` opens up on etherscan, you have deployed your first NFT
- Go to the transaction details by clicking on the transaction hash, check that there was a token transfered to your address

-->
