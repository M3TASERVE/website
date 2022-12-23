---
title: '💻 Lesson 2 - Remix IDE'
version: '✔️ v1.0'
slug: "remix"
number: 2
menu:
  courses:
    parent: "Solidity 101"
weight: 22
toc: true
---

<!--
## Table of contents
- [What is Remix ?](#what-is-remix-)
- [How to test your projects ?](#how-to-test-your-projects-)
- [Conclusion](#conclusion)
-->

# What is Remix?

Remix is an open-source, web and desktop IDE for Ethereum development. 
It is the easiest development tool to get started with building on Ethereum, and has a huge collection of plugins to extend its experience. 
Remix helps you write Solidity code directly in the browser, and has tools for testing, debugging, and deploying your smart contract to the blockchain.
You can use Remix online at [https://remix.ethereum.org/](https://remix.ethereum.org/) or offline by downloading [Remix Desktop](https://github.com/ethereum/remix-desktop/releases)

Go through the documentation at [Remix IDE Docs](https://remix-ide.readthedocs.io/en/latest/).

When you first open Remix, you will be greeted with a screen like this.

<img class="medium-image" src="/wp-content/uploads/2022/07/remix1.png"></img>

In the left sidebar, you can switch between the `File Explorer`, the `Solidity Compiler`, the `Deployer`, and an `Extensions` panel.
In the bottom, there is an output panel, which displays output from your compilation, your deployments, and your function calls. 
In the middle is where you will edit code. Currently it displays the home screen of the IDE, but once we open a file it will become the code editor.

# How to test your projects?

For the next projects, you will be provided with a user interface to test your Smart Contract.
You can start by using Remix to test calls and transactions however to check the compliance of the contract to a required interface we propose to use a simple UI implemetation to interact with the contract.
This interface requires Metamask and that the Smart Contract is deployed on a testnet.

<img class="medium-image" src="/wp-content/uploads/2022/10/vote.png"></img>

Note that unit test could have been provided to test the contract but that is another lesson.

# Conclusion

In this lesson, we have learn how to use Remix to compile and deploy a sample Smart Contract. In the next lesson, we see how to code a Smart Contract using Solidity.

<!-- 

# TODO: refactoring tuto Remix //> deploy a contract on test net using Metamask

-->

<!--

When you first open Remix, you will be greeted with a screen like this.

![](/wp-content/uploads/2022/07/remix1.png)

In the left sidebar, you can switch between the `File Explorer`, the `Solidity Compiler`, the `Deployer`, and an `Extensions` panel.

In the bottom, there is an output panel, which displays output from your compilation, your deployments, and your function calls. 

In the middle is where you will edit code. Currently it displays the home screen of the IDE, but once we open a file it will become the code editor.

## Remix Workflow

In the sidebar, if you look under the `contracts` folder - Remix ships with 3 basic smart contracts to help people learn Solidity. Let's take a look at `1_Storage.sol`.

![](/wp-content/uploads/2022/07/remix2.png)

We can see the code editor now.

In the file explorer, we can also see options to create a new file or directory, upload local files, or import files from Github.

To compile our contracts, we shift over to the `Solidity Compiler` tab, and we will see something like this in the sidebar.

![](/wp-content/uploads/2022/07/remix3.png)

Here, we can choose which `Compiler Version` we want, which smart-contract programming language we are using (mostly you will just be using Solidity), and some further configuration options.

Note: The other programming language listed in Remix, `Yul`, is a lower-level language. It is meant for intermediate compilation, and is closer to the hardware than Solidity is. 99% of the time you will not be coding in Yul. Read more about Yul here - [https://docs.soliditylang.org/en/v0.8.9/yul.html](https://docs.soliditylang.org/en/v0.8.9/yul.html)

Clicking `Compile 1_Storage.sol` will compile the contract and make it ready for deployment.

![](/wp-content/uploads/2022/07/remix4.png)

Moving over to the `Deployment` tab, we will see something like this in the sidebar.

![](/wp-content/uploads/2022/07/remix5.png)

First thing to note here is the `Environment`. Remix ships with a `Javascript VM` - which is a simulator of the Ethereum Virtual Machine (EVM) in the browser. This allows for fast testing and debugging of your smart contract, as long as your contract doesn't depend on another contract deployed to a real Ethereum network. Thankfully, our Storage contract does not, so we can test it right here in the Javascript VM.

To deploy to actual networks, we will want to change our `Environment` to one of the other options listed there (more on this later).

Along with the `Javascript VM`, Remix creates a set of fake accounts, all loaded up with 100 ETH, to test with. 

Select the `1_Storage.sol` contract from the dropdown, and click `Deploy` to deploy the contract. 

![](/wp-content/uploads/2022/07/remix6.png)

Once the contract is deployed, you will see it under the `Deployed Contracts` section - where you can now call functions on your smart contract.

Calling the `retrieve` function will return a value of `0` right now, which is the default value for integers in Solidity. 

![](/wp-content/uploads/2022/07/remix7.png)

Also, we will see in the Output panel some logs about the call to `Storage.retrieve` which is our function.

Now, let's try calling the `store` value with the number `5`.

![](/wp-content/uploads/2022/07/remix8.png)

Again, we see some logs in the output panel about the call to `Storage.store`. Now, if we try to `retrieve` again, the output will be `5`. 

![](/wp-content/uploads/2022/07/remix9.png)

**NOTE** - None of these function calls/transactions we made opened up your digital wallet (metamask). This is because we are testing in the `Javascript VM` currently, and that is just a simulator working with fake accounts. When deploying to a real network (Testnet or mainnet), transactions need to be confirmed and signed through your digital wallet. 
-->

<!--


https://trufflesuite.com/ganache/

-->
