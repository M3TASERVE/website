---
title: '🕮 Lesson 3 - Wallets'
version: '✔️ v1.0'
slug: "wallets"
number: 3
menu:
  courses:
    parent: "Blockchain 101"
weight: 13
toc: true
---

<!--
## Table of contents
- [Introduction](#introduction)
- [What is a cryptocurrency wallet?](#what-is-a-cryptocurrency-wallet)
- [What is the difference between cold and hot wallets?](#what-is-the-difference-between-cold-and-hot-wallets)
- [Conclusion](#conclusion)
-->

# Introduction

To use Blockchain, the main entrypoint is the crypto wallet.
In this lesson, we introduce the different types of wallets and how they work.

# What is a cryptocurrency wallet?

A cryptocurrency wallet is a software that creates and stores your private and public keys, interacts with the blockchain, monitors your balances and allows you to send and receive cryptocurrency.
Instead of thinking of a wallet in the traditional sense, where the cash or credit card are actually inside of your wallet, you must think about cryptocurrency wallet as a key to unlock your funds.

You cryptocurrencies are on the blockchain, more precisely  in the running ledger of transactions distributed all over the world, and they are assigned to your private key so you are the only one who can send them. The amount of cryptocurrencies you own is not marked directly by your public key but instead by a shorter representation named an address that is unique and that is linked to your account.

**What is an address?**

An address is a string of text generated using cryptography to represent your account on the blockchain. This address can be shared publicly with others, and is completely safe to do so. You can send and receive funds from and to your wallet address. Basically, the address is your unique identifier on the blockchain and represents your 'account'. An example of an Ethereum address is: `0x9ecD60d4435984d656fe3bABf4A4DAde5C9f87F1`.

**What are private keys?**

A private key is the counterpart to an address. Each address has an associated private key. As the name suggests though, this is meant to be *kept private and never shared with anyone*. Anyone who has the private key can prove the ownership of the corresponding address using signature. It is based on [asymmetric cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) 📚.
A private key looks something like this: `0x0c8b0fd05b29063558975ad41f7ed1c5abefca398c8e57a68385a018ca59f732`

Note: If you lose your private key, you lose access to your account and all its cryptocurrencies. Similarly, if someone steals your private key and steals your funds, you cannot do anything about it. It is VERY important to keep this private key safe.

For developers, we often use the private key as part of our codebase to perform certain transactions, such as deploying our own smart contracts to the Ethereum network. While you are still learning, we highly suggest you use a separate account entirely for development than you use for storing any sort of funds. Unfortunately, beginner developers often use the same account they have funds on, and accidentally share their codebase publicly - and hackers can see your private key in the codebase and end up stealing funds... More generally, some hackers are specialized in [extracting private keys](https://medium.com/@pierreia/quick-tour-on-ethereum-private-keys-attacks-3082846b7632) 📖 and it is a hot [research topic](https://www.ise.io/casestudies/ethercombing/
) 📖. How can check if your private key as been leaked using [public databases](https://privatekeys.pw/) 📖.

**What is a seed phrase?**

A seed phrase is readeable representation of the private key.

When you create a new crypto wallet, you will be presented with a seed phrase you should absolutely securely store and back up. Any new accounts you generate from inside that wallet will all be linked to the seed phrase. That one seed phrase will always generate the same accounts, with the same private keys and addresses for each. It is using [key derivation (bip39)](https://iancoleman.io/bip39/) 📖.
An example of a seed phrase is: `much remove habit rural all prefer sand armed umbrella process snow normal`

# What is the difference between cold and hot wallets?

First to understand better how wallets are implemented to contain and manage private keys, you can read this [book chapter](https://github.com/ethereumbook/ethereumbook/blob/develop/05wallets.asciidoc) 📖.

To understand the different types of crypto wallet, you can watch read this [article](https://crypto.com/university/crypto-wallets) 📃 and watch this [video](https://www.youtube.com/watch?v=d8IBpfs9bf4) 🎬 [06:02]

# Conclusion

In this lesson, we looked at wallets and their architecture. In the next lesson, we will explore in more details public key cryptography and how it is used in Bitcoin and Ethereum

<!--
TSS wallet ?? zengo?


## Setting up a Wallet

Crypto wallets are a manager for your accounts, and mainly their private keys. They also allow you to interact with decentralized applications, and allow connecting to a dApp through the wallet, acting as a single sign-on for all applications built on the blockchain. 

At LearnWeb3 as well, you can go into the Dashboard and connect your crypto wallet (after you have set it up), which will let us know what your address is so we can send you some sick NFTs when you graduate from our tracks!

For Ethereum, there are a number of wallet options available. The easiest to get started using, and most developer friendly, are either Metamask or Coinbase Wallet. 

Both are Ethereum crypto wallets that can be installed as browser extensions, or as a mobile apps. You can find the download links below. We suggest downloading any one of them, and setting it up, before proceeding with the track.

- [Download Metamask](https://metamask.io/download.html)
- [Download Coinbase Wallet](https://www.coinbase.com/wallet)

Other alternatives include Trust Wallet, Atomic Wallet, Rainbow Wallet, Frame.sh, etc.
- [Trust Wallet](https://trustwallet.com/)
- [Atomic Wallet](https://atomicwallet.io/)
- [Rainbow Wallet](https://rainbow.me/)
- [Frame.sh](https://frame.sh/)

<!--
Hot wallet > exchange platform (binance, kraken, coinbase), custodian platform (bitgo, unbound)
Cold wallet > software (metamask, mist), hardware (ledger nano), physical (mew)
-->
