---
title: '💻 Lesson 4 - Cryptographic Keys'
version: '✔️ v1.0'
slug: "keys"
number: 4
menu:
  courses:
    parent: "Blockchain 101"
weight: 14
toc: true
---

<!--
## Table of contents
- [Introduction](#introduction)
- [What is a transaction in Ethereum?](#what-is-a-transaction-in-ethereum)
- [Tutorial: How to sign a Bitcoin transaction ?](#tutorial-how-to-sign-a-bitcoin-transaction-)
- [Tutorial: How to sign an Ethereum transaction ?](#tutorial-how-to-sign-an-ethereum-transaction-)
- [Conclusion](#conclusion)
-->

# Introduction

To better understand wallets, it is important to learn how to deal with cryptographic keys.
In this hands-on, we use Javascript to generate and use keys.

---

**Installing dependencies: NodeJS**

Node Version Manager, otherwise known as nvm, is a bash script that simplifies the management of multiple Node.js versions.
To install nvm, use the provided install script:
```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
For Windows, we recommand that you use WSL2 and follow this official tutorial: https://docs.microsoft.com/fr-fr/windows/dev-environment/javascript/nodejs-on-wsl

After installing nvm, you may need to restart your terminal for it to recognize the newly installed nvm command (check version: nvm -v > 0.39.1).

Then install the latest Node version (v16):
```bash
$ nvm install 16
$ nvm use 16
```

When Node is installed via nvm and that you get a message similar to `now using node v16.15.1 (npm v8.11.0)`, you can use create a new folder for this tutorial and follow the next steps. In the sequel, we will use Javascript instructions. In order to run the samples of code, you must edit a file named for instance `script.js` and run the command `node script.js`

---

# What is a transaction in Ethereum?

We do a transaction whenever we want to add, update or modify something on the Ethereum network. Basically, a transaction is the way the real world interacts with the Ethereum blockchain network. For every transaction we do on the Ethereum network, we need to pay a fee called gas. Gas is either in wei (smallest unit of ETH) or gwei.

**Types of transactions in Ethereum**

There are three common types of transactions on the Ethereum network:
An ordinary transaction, when there is a transfer of ETH/ether from one account to another.
A transaction creating a contract is the type of transaction where a smart-contract in deployed on the Ethereum blockchain network.
A transaction invoking a contract, this transaction is sent with some data and is used to query/interact with a previously deployed smart-contract.

**Parameters of a typical Ethereum transaction**

* from: The sender address, a 20-byte address representing the account initiating the transaction.
* to: The receiver address, a 20-byte address representing an account of the receiver, or a contract account.
* value: This is the amount of ETH sent in the transaction from one account to another.
* data: This field contains the bytecode for contract deployment transactions. For the execution of a contract function, it has a function signature and encoded * arguments. This field isn't needed or left empty in funds transfer transactions.
* gasLimit: This is the maximum amount in wei that a transaction can use as gas.
* gasPrice: This is the amount in wei the sender is willing to pay for the transaction.
* chainId: This is the network id of your Ethereum node (mainnet: 1, rinkeby: 4, kovan: 42, etc.)
* nonce: It is the number of transactions a particular address sends. Each time an address sends a transaction, nonce increases with 1.

**Transaction flow in Ethereum**

* Making a transaction object and supplying it with all the necessary parameters.
* Signing the transaction with the private key of the sender.
* Sending the transaction to the Ethereum blockchain network using an Ethereum node.

**Signing a Transaction**

Signing a transaction means generating a signature on a transaction object using the private key of the sender. If you want to learn more about signing and validating in Ethereum, here are some excellent reads: [Signing and Verifying Ethereum Signatures by Yos}](https://yos.io/2018/11/16/ethereum-signatures/) and [Ethereum: Signing and Validating](https://medium.com/@angellopozo/ethereum-signing-and-validating-13a2d7cb0ee3) by Angello Pozo.

As every transaction needs gas as a fee, and we'll need some to send in the transaction, let's get some test ETH in our wallet. Now, we have a wallet and some test ETH in it. So let's send a transaction to transfer some ETH into a different account/wallet. 

# Tutorial: How to sign a Bitcoin transaction ?

**What is a Bitcoin address?**

You can think of a Bitcoin address as an account number for your bank account. The main difference being is that It is used to direct bitcoin during a transaction rather than store it. A Bitcoin address is a string combining letters and digits representing a destination on the bitcoin network. Every time someone wants to receive Bitcoin, they will ideally generate a new unique single-use address for each transaction using a wallet app or code. There are three types of Bitcoin addresses: 
* Legacy (P2PKH): Legacy is the original bitcoin address; they all start with one. It is the most compatible and supported by wallets.</br>
_Example:1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2_
* Nested SegWit (P2PSH): Nested SegWit is an improvement on Legacy; they have a 40% lesser transaction fee than Legacy addresses and have multi-signature. It starts with 3.</br>
_Example: 3EktnHQD7RiAE6uzMj2ZifT9YgRrkSgzQX_
* Native SegWit (Bech32): SegWit, short for Segregated Witness, has smaller transaction sizes; they can save 80% of transaction fees compared to Legacy. They start with bc1.</br>
_Example: bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4_

**How is a Bitcoin address generated?**

A random string of private key consisting of 64 (hex) characters (256 bits / 32 bytes) is generated first, it can be any number between 0 and ≤ n-1, where n is a constant (n = 1.1578*1077).
A string of 256-bit number which is less than n is fed to the SHA256 hashing algorithm which then generates a new 256-bit number. This is our private key.</br>
_For example: 1184CD2CDD640CA42CFC3A091C51D549B2F016D454B2774019C2B2D2E08529FD_

A 128 (hex) character (64 bytes) public key is then derived from the generated private key using, It has ‘04’ as the prefix. The public key is generated from the private key using [secp256k1](https://en.bitcoin.it/wiki/Secp256k1) 📖, which is a curve of [ECDSA (Elliptic Curve Digital Signature Algorithm)](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) 📚. So a public key is generated using a formula P = p*G, where p is the private key and G is the generator point. The generator point G is a defined point on the secp256k1 curve.</br>
<div class="large-text" title="04d0988bfa799f7d7ef9ab3de97ef481cd0f75d2367ad456607647edde665d6f6fbdd594388756a7beaf73b4822bc22d36e9bda7db82df2b8b623673eefc0b7495">For  example: 04d0988bfa799f7d7ef9ab3de97ef481cd0f75d2367ad456607647edde665d6f6fbdd594388756a7beaf73b4822bc22d36e9bda7db82df2b8b623673eefc0b7495</div>

An address of 34 characters is generated by applying the [SHA256](https://en.wikipedia.org/wiki/SHA-2) 📚 hashing algorithm on the pubic key, then computing the [RIPEMD160](https://en.wikipedia.org/wiki/RIPEMD) 📚 hash of the result. A = RIPEMD160(SHA256(P)), where P is the public key, and A is the Bitcoin address. Bitcoin addresses are always encoded as [Base58Check](https://en.bitcoin.it/wiki/Base58Check_encoding) 📖 which uses 58 characters (Base58 number system), and a checksum to avoid ambiguity, errors in address transcription, and to aid in human readability.</br>
_For example: 16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS_

Note: A private key can be generated to the public key, but the public cannot be converted back to the private key as the algorithm is a one-way function.

**How to generate a Bitcoin address in JavaScript?**

To do any type of transaction on the Bitcoin blockchain, you will need a private key and its Bitcoin address. We will see here how to generate a new Bitcoin address in JavaScript using [CyrptoCoinJS](http://cryptocoinjs.com/). It is a JavaScript library that helps you interface with different cryptocurrencies like Bitcoin, Litecoin, and Dogecoin.

To see how to generate a new Bitcoin address, follow the steps:

1. Install the CryptoCoinJs library 
```bash
$ npm install coinkey@3.0.0
```
2. Generate a private key and print the corresponding address
```js
const CoinKey = require('coinkey'); 
var wallet = new CoinKey.createRandom();
console.log("PrivateKey:", wallet.privateKey.toString('hex'));
console.log("Address:", wallet.publicAddress);
```
3. Congratulations! 🎉 You can now use this address in a Bitcoin transaction and import the corresponding private key to your wallet to be able to move funds from this address.

---

# Tutorial: How to sign an Ethereum transaction ?

**What is an Ethereum address?**

While signing in to any platform on the internet, you need to authenticate using a combination of credentials. Consider an Ethereum address as your username and a corresponding private key as the password. While your Ethereum address is public and can be shared, the private key must always be kept secret. Using this combination lets you interact with the Ethereum blockchain. An Ethereum address is your identity on the blockchain, and it looks like this “0x6E0d01A76C3Cf4288372a29124A26D4353EE51BE”. Having a valid Ethereum address is required for:
* Receiving/Sending Ethereum currency
* Signing/Sending transactions
* Connecting to decentralized applications

**How an Ethereum address is generated?**

A random private key of 64 characters (256 bits / 32 bytes) is generated first. 

_For example: 0xf4a2b939592564feb35ab10a8e04f6f2fe0943579fb3c9c33505298978b74893_

A 128 (hex) character (64 bytes) public key is then derived from the generated private key using [Elliptic Curve Digital Signature Algorithm (ECDSA)](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) 📚 and the X and Y coordinates of the corresponing point are concatenated and shown as hex.
<div class="large-text" title="0x04345f1a86ebf24a6dbeff80f6a2a574d46efaa3ad3988de94aa68b695f09db9ddca37439f99548da0a1fe4acf4721a945a599a5d789c18a06b20349e803fdbbe3">For  example: 0x04345f1a86ebf24a6dbeff80f6a2a574d46efaa3ad3988de94aa68b695f09db9ddca37439f99548da0a1fe4acf4721a945a599a5d789c18a06b20349e803fdbbe3</div>

The [Keccak-256](https://fr.wikipedia.org/wiki/SHA-3) 📚 hash function is then applied to (128 characters / 64 bytes) the public key to obtain a 64 character (32 bytes) hash string. The last 40 characters / 20 bytes of this string prefixed with 0x become the final Ethereum address.

_For example: 0xd5e099c71b797516c10ed0f0d895f429c278_

Note: 0x in prefix indicates that the number/string is written in hex.

A standard was proposed by [Ethereum Improvement Proposal 55 (EIP-55)](https://github.com/Ethereum/EIPs/blob/master/EIPS/eip-55.md) 📖. It offers a backward-compatible checksum for Ethereum addresses by modifying the capitalization of the hexadecimal address. The idea is that Ethereum addresses are case-insensitive and all wallets are supposed to accept Ethereum addresses expressed in capital or lowercase characters, without any difference in interpretation.

By modifying the capitalization of the alphabetic characters in the address, we can convey a checksum that can be used to protect the integrity of the address against typing or reading mistakes. Wallets that do not support EIP-55 checksums simply ignore the fact that the address contains mixed capitalization, but those that do support it can validate it and detect errors with a 99.986% accuracy.

The mixed-capitals encoding is subtle and you may not notice it at first. With an EIP-55 mixed-capitalization checksum it becomes:
_0xd5e099c71B797516c10ED0F0d895f429C2781142_

Some of the alphabetic (A–F) characters from the hexadecimal encoding alphabet are now capital, while others are lowercase. EIP-55 is quite simple to implement. We take the Keccak-256 hash of the lowercase hexadecimal address, without the 0x prefix.
<div class="italic-text">Keccak256("d5e099c71b797516c10ed0f0d895f429c278") =
b33521cd9ead82ca8460f16bd5e099c71b797516c10ed0f0d895f429c2781142</div>

Then we capitalize each alphabetic address character if the corresponding hex digit of the hash is greater than or equal to 0x8. This hash acts as a digital fingerprint of the address, giving us a convenient checksum. Any small change in the input (the address) should cause a big change in the resulting hash (the checksum), allowing us to detect errors effective.

**How to generate an Ethereum address in JavaScript?**

To do any type of transaction on the Ethereum blockchain, you will need a private key and its Ethereum address. We will see here how to generate a new Ethereum address in JavaScript using [ethers.js](https://docs.ethers.io/v5/). It is a JavaScript library that helps you interface with Ethereum. It is also a lightweight alternative to [Web3.js](https://web3js.readthedocs.io/en/v1.3.0/). Ethers.js is considered by some to be more stable and less buggy than other libraries and has extensive documentation. This library is also very friendly to beginners. Ethers.js is very well maintained and is preferred over Web3.js by many new developers.

1. Install the Ether.js library 
```bash
$ npm install ethers@5.6.9
```
1. Generate a private key and print the corresponding address
```js
const ethers = require('ethers'); 
const wallet = ethers.Wallet.createRandom()
console.log("PrivateKey:", wallet.privateKey);
console.log("Address:", wallet.address);
console.log('Mnemonic:', wallet.mnemonic.phrase)
```
3. Congratulations! 🎉 You can now use this address in an Ethereum transaction and import the corresponding private key to your wallet to be able to move funds from this address.

**How to create an Ethereum address from scratch ?**

1. Install the cryptographic dependencies
```bash
$ npm install keccak256 elliptic 
```
2. Generate a private key and print the corresponding public key
```js
const EC = require('elliptic').ec;
const curve = new EC('secp256k1');
var keyPair = curve.genKeyPair();
console.log("privateKey:", keyPair.getPrivate().toString('hex'));
var pubPoint = keyPair.getPublic();
console.log("publicKey: ", pubPoint.encode('hex'));
```
3. Generate the corresponding address
```js
const keccak256 = require('keccak256')
keyPair = curve.keyFromPrivate("YOUR PRIVATE KEY", 'hex'); // optional
console.log("publicKey: ", keyPair.getPublic().encode('hex'));
x = keyPair.getPublic().getX().toString('hex');
y = keyPair.getPublic().getY().toString('hex');
console.log('04' + x + y); // reconstruct the public key 
var pubHash = keccak256(Buffer.from(x + y, 'hex')).toString('hex');
console.log(pubHash)
var address = pubHash.substring(pubHash.length-40);
console.log("address:", address);
```
4. Checksum the address (without using package eip55; eip55.encode(address).toString())
```js
var checksum = keccak256(Buffer.from(address)).toString('hex');
console.log(checksum);
checksum = Array.from(checksum);
for (var i = 0; i < checksum.length && i < address.length; i++) {
    var flag = parseInt(checksum[i], 16) > 8;
    console.log(address[i]
      +" "+checksum[i]
      +" "+(flag+" ").substring(0,5)
      +" "+(flag ? address[i].toUpperCase() 
        : address[i])); // change this line to create the new string
}
```
5. Sign a message using the private key
```js
var msg = 'hello world';
console.log("message:", msg);
var msgHash =  keccak256(Buffer.from(msg, 'utf8'));
var signature = keyPair.sign(msgHash.toString('hex'));
console.log("r =", signature.r.toString('hex'));
console.log("s =", signature.s.toString('hex'));
console.log("v =", signature.recoveryParam);
console.log("verify:", keyPair.verify(msgHash, signature.toDER()));
var keyPair = curve.keyFromPublic({ 
  x: keyPair.getPublic().getX().toString('hex'), 
  y: keyPair.getPublic().getY().toString('hex') 
}, 'hex'); // we don't need the private key to verify
console.log("verify:", keyPair.verify(msgHash, signature));
```

# Conclusion

In this lesson, we provided a brief survey of public key cryptography and focused on the use of public and private keys in Ethereum and the use of cryptographic tools, such as hash functions in the creation addresses. In the next lesson, we will put these ideas together and use a real wallet: MetaMask.

<!--

Threshold signature ??

https://cryptobook.nakov.com/symmetric-key-ciphers/ethereum-wallet-encryption

1. Open a new Javascript sandbox online: https://playcode.io/empty_javascript/
2. Install the CryptoCoinJs library: insert the following line in the script.js panel and then click on `Install module`: version 3.0.0

![](/wp-content/uploads/2022/06/coinkey_1.png)

0. Open a new Javascript sandbox online: https://playcode.io/empty_javascript/
1. Install the Ether.js library: insert the following line in the script.js panel and then click on `Install module`: version 5.6.9
```js
const ethers = require('ethers')
```

https://riptutorial.com/node-js/example/4578/using-node-version-manager--nvm-

- sign, hash https://www.learnweb3.io/tracks/sophomore/mixed-topics) 
- Bip39 - Seed memonic : https://iancoleman.io/bip39/ ; 
- bigint ?
- MyEtherWallet ?

```js
const ethers = require('ethers'); 
const crypto = require('crypto');
var id = crypto.randomBytes(32).toString('hex');
var privateKey = "0x"+id;
var wallet = new ethers.Wallet(privateKey);
```

```js
const ethers = require('ethers')
const wallet = ethers.Wallet.createRandom()
console.log('address:', wallet.address)
console.log('mnemonic:', wallet.mnemonic.phrase)
console.log('privateKey:', wallet.privateKey)
```

https://www.quicknode.com/guides/web3-sdks/how-to-generate-a-new-bitcoin-address-in-javascript

-->
