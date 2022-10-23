export const candyMachineAddress = "0xc8cb38224ddcc4fceacd6f6b3a17aae845d9193b5bfab11c84f725824e3d9f85";
export const collectionName = "TestCollection101"; // Case sensitive!
export const collectionCoverUrl = "https://gateway.pinata.cloud/ipfs/QmSzje6cr33SWvbxbcNFkfUpjReoe4ek1wuaY2aap8w5h7";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}