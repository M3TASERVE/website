---
title: '💻 Lesson 5 - MetaMask'
version: '✔️ v1.0'
slug: "lesson5"
number: 5
menu:
  courses:
    parent: "101-blockchain"
weight: 15
toc: true
---

<!--
## Table of contents
- [Introduction](#introduction)
- [What is MetaMask ?](#what-is-metamask-)
- [Tutorial: How to setup MetaMask ?](#tutorial-how-to-setup-metamask-)
- [Tutorial: How to make a transaction using MetaMask ?](#tutorial-how-to-make-a-transaction-using-metamask-)
- [Conclusion](#conclusion)
-->

# Introduction

Now that we know how cryptographic keys works, we can see how to use a cryptographic wallet.
In this hands-on, we use MetaMask to make transactions on Ethereum.

# What is MetaMask ?

[MetaMask](https://metamask.io/) 📖 is a browser plugin that serves as an Ethereum wallet. Users can store Ether and other tokens in the MetaMask wallet.
The wallet can also be used to interact with decentralized applications, or dapps.
MetaMask developpements are funded by Ethereum incubator [ConsenSys](https://consensys.net/) 📖.

By connecting to Ethereum-based Dapps, users can spend their coins in games, stake tokens in gambling applications and trade them on decentralized exchanges. It also provides users with an entry point into the emerging world of decentralized finance, or DeFi, providing a way to access DeFi apps such as [Compound](https://compound.finance/) 📖 and [PoolTogether](https://pooltogether.com/fr) 📖.

# Tutorial: How to setup MetaMask ?

To use MetaMask, you will need either Chrome, a Chromium-based browser such as Brave, or Firefox.

We will go through this getting started [tutorial](https://youtu.be/GNPz-Dv5BjM) 🎬 [02:00]

* First, you’ll need to download and install the official [MetaMask](https://metamask.io/download) extension/addon for your browser (either Google Chrome extension or Firefox addon depending on your browser). 
* Once installed, you should see the below splash screen. Click the ‘Get Started’ button to begin creating your Ethereum wallet using MetaMask.
<!-- ![](/wp-content/uploads/2022/06/metamask_0.png) -->
* On the next step, click the ‘Create a Wallet’ button.
<!-- ![](/wp-content/uploads/2022/06/metamask_1.png) -->
* You’ll then be asked if you want to help improve MetaMask. Click ‘No Thanks’ if this doesn’t interest you, otherwise click ‘I agree’.
<!-- ![](/wp-content/uploads/2022/06/metamask_2.png) -->
* Pick a password on the next step. This needs to be at least 8 characters long. We recommend using a completely unique password that hasn’t been used anywhere else, and contains a mixture of upper and lower case letters, symbols, and numbers. Read and accept the Terms of Use, and click ‘Create’ once your password has been set.
<!-- ![](/wp-content/uploads/2022/06/metamask_3.png) -->
* MetaMask will then present you with your 12-word backup phrase. You’ll need to write this down in the same order displayed on your screen. This will be needed to recover your wallet should you ever lose access to your computer, and should be kept stored somewhere safe. Anybody who has access to your 12-word back phrase will be able to recover your funds, so keep it private. Click ‘Next’ once you’ve written this down.
<!-- ![](/wp-content/uploads/2022/06/metamask_4.png) -->
* Confirm your backup phrase on the next screen by entering the words in the same order saved previously. Click ‘Confirm’ once done.
<!-- ![](/wp-content/uploads/2022/06/metamask_5.png) -->
* You have now almost completed the MetaMask setup process. Just click ‘All Done’ on the final page, and you will be automatically logged in to MetaMask. If you ever get logged out, you’ll be able to log back in again by clicking the icon added to your web browser (usually found next to the URL bar).
![](/wp-content/uploads/2022/08/metamask.png)

<!--
TODO: reuse Keys to load in Metamask

You will then be able to access your list of assets in the ‘Assets’ tab and view your transaction history in the ‘Activity’ tab.

Sending transactions is as simple as clicking the ‘Send’ button, entering the recipient address and amount to send, and selecting a transaction fee. You can also manually adjust the transaction fee using the ‘Advanced Options’ button, using information from ETH Gas Station or similar platforms to choose a more suitable gas price. After clicking ‘Next’, you will then be able to either confirm or reject the transaction on the subsequent page.
![](/wp-content/uploads/2022/06/metamask_6.png)
To use MetaMask to interact with a DApp or smart contract, you’ll usually need to find a ‘Connect to Wallet’ button or similar on the platform you are trying to use. After clicking this, you should then see a prompt asking whether you want to let the DApp connect to your wallet.
The below example is for Uniswap, but a similar process should be observed for other DApps. Simply connecting with a DApp means it can view your addresses-they cannot access your funds.
Once connected, you’ll then be able to interact with the DApps and use its features.
Dapps automatically connect to MetaMask, simplifying the connection process. Within the Dapp, if payment is required, a pop-up window will appear asking to confirm the transaction from the MetaMask account.
 ![](/wp-content/uploads/2022/06/metamask_7.png) -->

# Tutorial: How to make a transaction using MetaMask ?

In order to submit a first transaction for free, we will use a testnet. Because each transaction implies fees, we need first to get some Ether from a faucet (a website that automate the sending of Ethers on testnets).
In this tutorial, we will use either Ropsten or Görli to get Test-Ether and start a transaction.
* First, switch the network to Goerli in Metamask
* Then try a faucet to get some Test-Ether. Beware, faucets are often down or slow because they work for free.
  * All https://faucet.paradigm.xyz
  * Görli: https://goerli-faucet.slock.it/index.html https://faucet.goerli.mudit.blog
  * Ropsten: https://faucet.metamask.io
  * Rinkeby: https://faucet.rinkeby.io https://www.rinkebyfaucet.com https://app.mycrypto.com/faucet https://faucets.chain.link/rinkeby
  * Kovan: https://gitter.im/kovan-testnet/faucet 
* Configure a second account in your MetaMaks
* Send ether two this second account using the first one provided with Test Ether

# Conclusion

In this lesson, we have installed the most used wallet on Ethereum and we have see how to use it on a testnet. In the next lesson, we see how to do it programmatically using NodeJS.

<!--

**Exercice**: try to get funds on a testnet like Ropsten or Görli and perform a first transaction using your freshly configured wallet. If you need help, you can follow this [tutorial](https://ethereum-blockchain-developer.com/001-metamask-install/03-get-testnet-ether/) 📖.

https://www.cryptonary.com/cryptoschool/tutorial-metamask-advanced/

https://ethereum-blockchain-developer.com/001-metamask-install/00-overview/

https://cryptobriefing.com/metamask-beginner-guide/

* Install MetaMask : https://metamask.io
![](/wp-content/uploads/2022/06/metamask.png)

* Connect to Göerli Testnet :
    * https://goerli.net
    * https://stats.goerli.net
![](/wp-content/uploads/2022/06/goerli.png)

* Get Ether from Faucet : https://faucet.metamask.io

* Exercise :
    * Send Ether to 0x
    * Visualize your transaction : https://goerli.etherscan.io/

![](/wp-content/uploads/2022/06/tx.png)

-->
