---
title: '🏆 Lesson 7 - Challenge'
version: '❌ v1.0'
slug: "lesson7"
number: 7
menu:
  courses:
    parent: "Course 2"
weight: 27
toc: true
---

<!-- 
## Table of contents
- [🚀 Build your Smart Contract for Crowdfunding](#-build-your-smart-contract-for-crowdfunding)

* Unlimited amount of participants = fix the UI using the graph

-->


# 🏆 Final Project

The final project will provide hands-on experience designing, implementing, and deploying a DApp.
The goal of this project will be to implement a User Interface for a DAO DApp.

The DAO will implement three voting systems:
- Permissioned Relative Majority (voting)
- Token-Based Quorum Voting (crowdfunding)
- Quadratic voting (erc)

The user interface must be able to display a collection of proposals.
We recommend using _theGraph_ to enable fast query.

The DApp will be deployed on _Vercel_ (link you github account to Vercel and use _Hobby_ free plan to create and deploy a SPA from a template).



<!--

https://betterprogramming.pub/learn-solidity-the-factory-pattern-75d11c3e7d29  >> factory/proxy VS 1 gros contrat >>> theGraph template : https://thegraph.com/docs/en/developing/creating-a-subgraph/#data-source-templates
https://research.csiro.au/blockchainpatterns/general-patterns/contract-structural-patterns/factory-contract/

vercel > login with github > create from template vue

docker run --rm -it --name node -e NODE_OPTIONS=--openssl-legacy-provider -p 8080:8080 -v $PWD:/project --entrypoint /bin/bash --workdir /project node:19.0.0-bullseye
yarn install
yarn serve

import { graph } from './graph.js'
graph.init();

import { createClient } from 'urql'
// npm install --save urql
const APIURL = 'https://api.studio.thegraph.com/query/21330/gravity/v0.0.1'
const tokensQuery = `
  query MyQuery {
    gravatar(id: "0xa") {
      displayName
      id
      imageUrl
      owner
    }
  }
`
const client = createClient({
  url: APIURL,
})
export const graph = {
    init: async function () {
        const data = await client.query(tokensQuery).toPromise()
        console.log(data);          
    }
};


https://limechain.tech/blog/dao-voting-mechanisms-explained-2022-guide/
https://github.com/anish-agnihotri/quadratic-voting
https://www.radicalxchange.org/concepts/plural-voting/
https://github.com/DemocracyEarth/paper
https://www.daomasters.xyz/tools/snapshot

https://acceleratedcapital.substack.com/p/daos-and-democracy-voting-mechanisms

https://github.com/graphprotocol/example-subgraph >> https://thegraph.com/hosted-service/subgraph/create -- github : mydashboard >> urql OR Appollo
npm install -g @graphprotocol/graph-cli
graph init --product hosted-service nheulot-xdev-ext/ballottest
  goerli
  0x84863736b49fCB38ACed0B0dbE2Cda9d31975a44
  build/contracts_Ballot_sol_Ballot.abi
cd ballottest
graph codegen && graph build
graph auth --product hosted-service ACCESS TOKEN
graph deploy --product hosted-service nheulot-xdev-ext/ballottest

https://goerli.etherscan.io/address/0x84863736b49fCB38ACed0B0dbE2Cda9d31975a44#events

https://chainstack.com/avalanche-subnet-tutorial-series-indexing-subnet-with-the-graph/  => index gravatar
https://mirror.xyz/0xB38709B8198d147cc9Ff9C133838a044d78B064B/DdiikBvOLngfOotpqNEoi7gIy9RDlEr0Ztv4yWlYyzc

https://wizard.openzeppelin.com/#governor
https://docs.openzeppelin.com/contracts/4.x/api/governance
https://docs.compound.finance/v2/governance/

The final project will provide hands-on experience designing, implementing, and deploying a DApp. 
The goal of this project will be to implement an NFT Marketplace.

NFT marketplace is a marketplace, which allows content creators to showcase and list their assets in the form of digital tokens (NFT).
An NFT token is created and stored on a blockchain, serving as proof of ownership and provenance of a specific item. 
It works like a digital certificate of authenticity that can be easily verified by anyone anywhere in the world on a blockchain.
Buyers or investors can then purchase that digital asset. 
An asset owner can choose various ways of selling their digital assets on the marketplace.
They can choose to sell it for a Fixed price or can put it in the Auction, open for bidding, where the highest bidder gets to own the NFT.
Collections are used to group the NFTs of similar traits, to make it easy for users to browse. 
An NFT marketplace should have a feature where users can create/update a collection and assign their NFTs (they owned) to a collection. 

There are basically two main features of NFT Marketplaces:
* Creators must be able to mint an NFT token and list them for sale.
* Collectors must be able to buy an NFT. Collectors, who has bought an NFT, can resell, or relist their NFTs. 
Note that we refer as “primary market” the first sale of an asset and the “secondary market” encompasses all subsequent resales of this same asset.

Here are some functions that are expected for an NFT Marketplace DApp:
* Browsing functions (Browse NFTs, Browse Collections, Browse Users)
* Creation functions (Create Profile, Edit Profile, Create collection, Delete Collection and Create NFT) that requires authentication to identify the user.
We show the user Profile in the Marketplace, associated with each NFT Card, Leaderboard, Collection, Bidder List, and other places. 
So we need a maintain the Profile of the user which may include the user’s fullname, username, bio, cover image, avatar & other users’ public information.
* Buying functions (NFT Fixed Price or Auction Sale, put the NFT for Sale, buy NFT)
Sale Can be of different Types:
  * Fixed Price sale: Here user will list the NFT for a fixed price, so that other users can directly purchase the NFT, by paying the amount given in the NFT detail.
  * Auction: Here user will list the NFT for Auction, where the user will specify the minimum Bid Amount and duration of the auction. So users can bid on the NFT. After the Auction is expire, no one will be able to place a bid. Now the Owner can decide to accept/reject the highest bid. In case the user has opted to Accept, The amount will go to the user, and the owner of the NFT will be transferred to the highest bidder.
  * Hybrid ( Auction & Fixed Price): User can also List their NFTs, in the hybrid model, i.e List them both for Fixed price & Auction. So here the user has to Specify the minimum Bid Amount, duration of the auction, and buy now price. Now user can place bid on the auction, but if user buy the NFT with Buy now price, the NFT will be immediately sold to the buyer and the auction will be closed.

Example of user journey:
* Connecting your DApp with a Web3 Wallet: Minting an NFT on a blockchain, requires you to first connect your Dapp with a web3 wallet like Metamask.
* Uploading Metadata to IPFS: You need to upload your NFT’s Metadata to IPFS ( InterPlanetary File System), metadata includes the NFT’s Assets ( Image, video, GIf), title, description, and Properties. Since we are building a nonfungible token, we need to make sure this metadata stays forever and is decentralized. Thus storing it in IPFS is the best option. If you upload these files in a centralized database, it is risky for the security of your file. After you upload your NFT’s Metadata to IPFS, you will get a metadata ID ( IPFS key)
* Mint your NFT
* Take the metadata ID from the IPFS, use it as tokenURI, and sign the transaction, to mint an NFT.
* Users can visit the NFT detail page and can Buy or Bid on an NFT, depending on the form of Sale. ( Buy = Fixed Price or Hybrid, Bid = Auction).
* User Select an NFT → Connect Metamask → Call Buytoken or BidToken function → Sign TX & Send to Blockchain → Event will be triggered which will change the owner in the DB

![](/wp-content/uploads/2022/10/marketplace.png)

Note: to improve the query & search functionality in the NFT marketplace, its good to maintain a cache of the NFTs metadata in a Database as well as on IPFS.
Users will find it convenient to browse the NFT by searching their title, by category, filter by collection, etc. These could be different views to list the NFTs.



<!-- 

TODO: 
https://limechain.tech/blog/dao-voting-mechanisms-explained-2022-guide/
 - vote = permissioned relative majority 
 - crowdfunding = token-Based Quorum Voting?
 - quadratic voting
   -> https://aragon.org/how-to/set-your-dao-governance


TODO: multisig ? https://medium.com/coinmonks/how-to-design-then-develop-an-nft-marketplace-understanding-the-architecture-behind-it-bdeb8af9fbc2


You should Refer to Some tutorials & content, that must be useful for you :
https://www.youtube.com/watch?v=GKJBEEXUha0
https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb
https://github.com/dabit3/polygon-ethereum-nextjs-marketplace/


Reservation d'espace de vente et d'affichage ==> On peut choisir des emplacements typés ===> il y a un parcours utilisateur ?

Metaverse = visite virtuelle ?
Land = on achete des voxels dans un open world >> minecraft like

Spec marketplace:
* English Auction 
* buy / sell NFT with Eth-payable OR ERC20 => bid / seller
* interface (code skeleton)


=> first module of metaverse! 
    - Money
    - Land = token id nft (metadata without ipfs ?)
    - Contract LandSale (first in, first served) ===> dapp land (lib grid js ?)
    - Give Away / LandSale Privée > mint privé basé whitelist > !! escrow whitelist with merkletree (erc1155 ?)
        https://solidity-by-example.org/app/merkle-tree



https://en.wikipedia.org/wiki/The_Million_Dollar_Homepage

http://bennycheung.github.io/interactive-hex-world-map-using-d3

https://courses.cs.washington.edu/courses/cse442/22wi/
Prior to diving in, it is helpful to gain a sense of what goes into formulating a successful project and to beware of common pitfalls. 


Your project should address a concrete metaverse use case.

More precisely, your task is to create a metaverse with the following characteristics:
- 2D grid-based land system (NFT)
- Auctioning of lands
- Simple UI to buy or sell lands

An example of the expected result is the [Million Dollar Homepage](https://en.wikipedia.org/wiki/The_Million_Dollar_Homepage)

The final deliverable will take the form of an interactive DApp. 
In addition to your code, you will be responsible for presenting your final results. 
At the end of the quarter we will have a video showcase for you to share your work.


-->
