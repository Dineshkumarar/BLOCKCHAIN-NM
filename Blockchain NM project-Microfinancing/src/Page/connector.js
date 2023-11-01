const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   }
  ],
  "name": "addFinancialData",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "name": "financialRecords",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "getFinancialData",
  "outputs": [
   {
    "components": [
     {
      "internalType": "uint256",
      "name": "timestamp",
      "type": "uint256"
     },
     {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
     }
    ],
    "internalType": "struct MicroFinancing.FinancialData",
    "name": "",
    "type": "tuple"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   }
  ],
  "name": "updateFinancialData",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0xae052e8f044ECC3E6f9754741aC482D91CAa1451"

export const contract = new ethers.Contract(address, abi, signer)
