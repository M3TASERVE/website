---
title: '💻 Lesson 6 - Ethers.js'
version: '✔️ v1.0'
slug: "lesson6"
number: 6
menu:
  courses:
    parent: "Course 1"
weight: 16
toc: true
---

<!--
## Table of contents
- [Introduction](#introduction)
- [What is a Blockchain Service Provider ?](#what-is-a-blockchain-service-provider-)
- [Tutorial: How to make a transaction using Ethers.js and Infura ?](#tutorial-how-to-make-a-transaction-using-ethersjs-and-infura-)
- [Tutorial: How to make a transaction using Ethers.js and MetaMask ?](#tutorial-how-to-make-a-transaction-using-ethersjs-and-metamask-)
- [Conclusion](#conclusion)
-->

# Introduction

To start building DApps, we must learn how to handle transactions programmatically.
In this hands-on, we use Javascript SDK to make transactions on Ethereum.

# What is a Blockchain Service Provider ?

To access these networks natively and see the data being passed across them, you would have to interact with a blockchain client.
Most blockchain clients expose a REST API that makes it possible to fetch data and submit transactions.
For instance, Infura provides endpoints to Ethereum's API. 
Services like Infura are named the service providers because they get information on and off blockchains.

# Tutorial: How to make a transaction using Ethers.js and Infura ?

The INFURA service has been around for quite some time and is very robust and reliable and highly recommended. They offer a standard JSON-RPC interface and a WebSocket interface, which makes interaction with standard tools versatile, simple and straightforward. The main benefits of using this gateway instead of deploying your own Ethereum node are as follow:
- higher rate limit
- customer usage metrics
- access to archive data (requires paid upgrade)

First, we have to [register](https://infura.io/register) on Infura.

![](/wp-content/uploads/2022/06/infura_1.png)

Then, you should receive an email that ask you to confirm the email address. After confirmation, you will be able to finalize your registration.

![](/wp-content/uploads/2022/06/infura_2.png)

Then you have to create a project for our tests.

![](/wp-content/uploads/2022/06/infura_3.png)

In the end, you will be able to acccess the Infura dashboard of your project.

![](/wp-content/uploads/2022/06/infura_4.png)

In the settings panel, you can get your Project ID. We will need it in the sequel.

![](/wp-content/uploads/2022/06/infura_5.png)

Now that we have an Infura account, we will reuse ethers.js, use it to connect to a web3 provider, and get information from the Ethereum network.
For our tests, we will use a testnet named Ropsten.

1. Install the Ether.js library
```js
$ npm install ethers@5.6.9 dotenv
```
2. Store you private key from the previous exercice and your Infura project ID in an environnement file `.env` like this:
```
PRIVATE_KEY="YOUR PRIVATE KEY"
PROJECT_ID="YOUR PROJECT ID"
```
1. Write the following code in a file `script.js`
```js
const dotenv = require("dotenv"); dotenv.config(); // Make sure that .env file contains the variables: 
const ethers = require('ethers');

const network = "ropsten"; // testnet name
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
const provider = new ethers.providers.InfuraProvider(network, { projectId: process.env.PROJECT_ID });
const gateway = wallet.connect(provider);

async function run() {
    console.log(
        (await gateway.getBalance()).toString(), 
        await gateway.getTransactionCount()
    );
}

(async function main() { 
    try {
        run();
    } catch(err) { 
        console.error(err); 
    } 
})();
```
3. Get Ether from a Ropsten faucet (warning: it can take up to 30min to validate the transaction): https://faucet.egorfine.com
4. Use Etherscan to monitor the faucet transaction: https://ropsten.etherscan.io/address/0x7917A2F6c13E1e13452F0D52157E5aFaD999D36B
5. Send 1 ether back to the faucet using ether.js : https://docs.ethers.io/v5/api/providers/api-providers/#InfuraProvider
```js
async function run() {
    console.log(
        (await gateway.getBalance()).toString(), 
        await gateway.getTransactionCount()
    );
    console.log(
        await gateway.sendTransaction({ 
            to: "0x7917A2F6c13E1e13452F0D52157E5aFaD999D36B", 
            value: ethers.utils.parseEther("1.0") 
        })
    );      
}
```
6. Congratulations! You have connected to the Ethereum network using ethers.js and make your first transaction. Use its hash to monitor its status on Etherscan.

You'll see that the transaction is yet to be added to the new block on the blockchain and has pending status. That's because we entered the gas value significantly low.

1. Send a transaction that will be in pending status forever
```js
async function run() {
    var nonce = await gateway.getTransactionCount();
    var tx = { 
        to: "0x7917A2F6c13E1e13452F0D52157E5aFaD999D36B", 
        value: ethers.utils.parseEther("1.0"), 
        nonce: nonce
    };
    gateway.provider.estimateGas(tx).then(async function(estimate) { 
        tx.gasLimit = estimate; 
        tx.gasPrice = ethers.utils.parseUnits("0.000000001", "gwei");
    });    
    console.log(await gateway.sendTransaction(tx));          
}
```
8. Erase the previous pending transaction using a new one with the same nonce
```js
async function run() {
    var nonce = await gateway.getTransactionCount();
    var tx = { 
        to: "0x7917A2F6c13E1e13452F0D52157E5aFaD999D36B", 
        value: ethers.utils.parseEther("1.0"), 
        nonce: nonce - 1
    };
    console.log(await gateway.sendTransaction(tx));
}
```

Note: It's important to note that the "nonce" value is the same across both transactions. As previously mentioned, the nonce is a pointer to the number of transactions an Ethereum address has. In order to re-submit a transaction with higher gas, you must use the same nonce as the original transaction. If you use an increased nonce, that will be a new transaction, thus spending more of your ETH than you intended.

So, as we saw with the above example, the gas price on a transaction should be competitive for a transaction to get approved. The miners of the blockchain set gas based on available block space and what all transactions are willing to pay to occupy that block space, when there is a transaction with the gas below the threshold gas value, it won't get approved. Transactions with higher gas value compared to other transactions get approved quickly.

# Tutorial: How to make a transaction using Ethers.js and MetaMask ?

We have seen how to use `ethers.js` on server side but this library is mainly meant to be used on client side in order to sign the transactions using the user's wallet.
Let's try to use MetaMask to sign a transaction.

1. Install http server
```bash
$ npm install http-server
$ npx http-server
```
2. Create a file `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
    <script>
      const network = "ropsten"; // testnet name
      const provider = new ethers.providers.Web3Provider(window.ethereum, network);
      const signer = provider.getSigner();

        async function run() {
            await provider.send("eth_requestAccounts", []);            
            console.log("Account:", await signer.getAddress());
            let userAddress = await signer.getAddress();
            document.getElementById("wallet").innerText = "Your wallet is " + userAddress;
            
            var tx = await signer.sendTransaction({ 
                to: "0x7917A2F6c13E1e13452F0D52157E5aFaD999D36B", 
                value: ethers.utils.parseEther("1.0"), 
                nonce: await signer.getTransactionCount()
            });
            document.getElementById("tx").innerText = "Tx: " + JSON.stringify(tx);
        }

        (async function main() { 
            try {
                run();
            } catch(err) { 
                console.error(err); 
            } 
        })();
    </script>
  </head>
  <body>
    <div id="wallet"></div>
    <div id="tx"></div>
  </body>
</html>
```
3. Open your web browser: `localhost:8080`

You can notice that we use MetaMask own gateway to submit and track the transaction.
Congratulations! You have built your first DApp!

# Conclusion

In this lesson, we have seen how to use an SDK to make a transaction on Ethereum (both on server-side and client-side). It is a first draft of DApp. In the next lesson, we will see how Dapp are central in the maturation of Web3 and Metaverse.


<!--
https://docs.ethers.io/v5/getting-started/

https://github.com/AsaoluElijah/first-dapp
http://getskeleton.com/

https://www.quicknode.com/guides/web3-sdks/how-to-generate-a-new-ethereum-address-in-javascript
https://www.quicknode.com/guides/web3-sdks/how-to-connect-to-ethereum-network-with-ethers-js
https://www.quicknode.com/guides/web3-sdks/how-to-re-send-a-transaction-with-higher-gas-price-using-ethers-js

https://goerli-faucet.pk910.de/


Sometimes, you submit a transaction on Ethereum without enough gas due to network congestion or too many pending transactions offering a higher gas price than you have offered on your transaction. If you have a high priority transaction but low gas, you could end up having to wait hours or even days for the transaction to settle. In these instances, you'll need to re-send a transaction with higher gas and the same nonce in order to have it mined sooner than later.

We will now go over all of the terminology and information around sending a transaction on Ethereum and re-sending the same transaction using Ethers.js on one of the Ethereum test networks.

-->
