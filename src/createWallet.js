const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

//redes
//bitcoin: rede principal - mainnet
//testnet: rede de testes = testnet
const network = bitcoin.networks.testnet;

//derivação de carteiras HD (hierarchical deterministics)
const path = `m/49'/1'/0'/0`;

//cria a seed
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

//cria a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

//cria conta pvt-pub keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network
}).address;

console.log("Carteira gerada");
console.log("Endereço:", btcAddress);
console.log("Chave privada:", node.toWIF());
console.log("Seed:", mnemonic);