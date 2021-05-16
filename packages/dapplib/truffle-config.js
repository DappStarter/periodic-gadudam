require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remain umbrella good private blue swarm'; 
let testAccounts = [
"0x5194a130f6f9dd8d4a1302a014c5cc07c54d2df5111d2ffc88e91f41eb511130",
"0xd0607921c65130465f6f404acf944001fa0078e4e04d66e385c1c394fc75001c",
"0x403bbc8a59686fda839ded55e7950a7a1a9d75d84dffcd5e9cc79918c3f08a1b",
"0x79f37bf0537babaa9ef0b88edff7569ab352606cf008d70c2e90fa3b78dfee48",
"0xe71de2ae7b7bbea4cb8204ed60a3435ed21265ecce47947c5b5bbe4e3c83fde7",
"0x909983548216df0c388792cc9faaa97d2d3436fced6428a2d735b8a4226e55c9",
"0x2916e54c0ad62461a1ec5ee64f29687151bdc5967dbce96a1082a06ac2c647c9",
"0xdda6d58f24663ff2744801d3b57c42ca25bc7c54c5bfc42ffadc93c0f3b309ed",
"0x6370fe3f2ecb106ba7045952c3034b79bf42841e9f3924df2027153187a497f3",
"0xf06bcf7bf014d4cac9706062988267bdd25ef64c98c8a37a00939c9e2107ea87"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
