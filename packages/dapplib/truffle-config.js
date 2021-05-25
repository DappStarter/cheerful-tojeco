require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind mistake heavy climb swift genre'; 
let testAccounts = [
"0xbb930a3ea8172494c9bea1590f78fdbed6a392157bb704577bfd7951d0fa55a3",
"0x175651e964b7974830b3c89d79bcc50c34774e1a472659131229e508f52e28cb",
"0x4542247691207a49e4c1c8314f13f08ba92d5d46df03a02042ce79901046d817",
"0x5824f53aece8dbaec29b371fda73c80061132bcc5bed7df36b4a55c475291287",
"0x627d506a8d4244b148789c73f42d256e81cac4b36ed07dcc49931f88179e9fe3",
"0x1805436e68eca4342a4366065c41b5738a1ffc78e1d10365509073228e487262",
"0x4324e5939c175d1b9ee04aea9fd6bafca8e0d7e535d6bd0c71178dd2c08a30f5",
"0x47abff3aa1025c0e93e34da1d57c94314ca29ccfe5d7075795aca490027b917d",
"0xfb061cdde692a522ec177f0cded0794f127c667523fd06ec1ad7bb4676eff9ad",
"0xd11434aac804e35c0031e981a6b302358a79c5a6b8a5ea7beaaa93923eeed744"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
