const { generateAndTokenizeImage } = require('../sdk/yunkai-sdk');
const { Connection, Keypair } = require('@solana/web3.js');

// Create Solana connection
const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

// Create or load your Solana wallet
const wallet = Keypair.generate();  // Use your wallet's Keypair

const description = 'A futuristic city with flying cars and glowing skyscrapers';
generateAndTokenizeImage(connection, wallet, description)
  .then(result => {
    console.log('Generated and tokenized image:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
