
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { useEffect, useState } from "react";
import Web3 from 'web3';

/** Do not destructure env variables */
const INFURA_ID =  "a25ddf095d024cce86b3486bd68baf91";
const NFT_ADDRESS = "0x29e26a5eFaBEDe6e85F832aBDB6A7b5d05bb19e8";
const ENVIRONMENT = "development";

const web3 = new Web3(Web3.givenProvider)
const contractABI = require("/data/SampleNFT.json");

const acceptedChains = "1";

export const sampleNFT = new web3.eth.Contract(contractABI.abi, NFT_ADDRESS);

export const injected = new InjectedConnector({ supportedChainIds: acceptedChains, });
export const walletConnect = new WalletConnectConnector({
  infuraId: INFURA_ID,
  supportedChainIds: acceptedChains,
});

export const walletlink = new WalletLinkConnector({
  appName: 'Board Game Yawn Club',
  supportedChainIds: acceptedChains,
})



  export const mint = async (account, numberOfTokens) => {
    console.log('minting publicMint...');
    const amount = (numberOfTokens * 0.01).toString();
    const amountToWei = web3.utils.toWei(amount, 'ether');
    const result = sampleNFT.methods.mint(account, numberOfTokens).send({ gasLimit: String(1000000), to: "0x29e26a5eFaBEDe6e85F832aBDB6A7b5d05bb19e8", from: account, value: amountToWei }).then((result) => {
      console.log(`Check out your transaction on Etherscan: https://etherscan.io/tx/` + result);
        return {
          success: true,
          status: `Check out your transaction on Etherscan: https://etherscan.io/tx/` + result
          };
    }).catch((err) => {
      console.log("Mint transaction failed!");
      return {
        success: false,
        status: "Something went wrong: " + err.message
        }
    });
    return result;
};

export function abridgeAddress(hex, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

export const useENSName = (library, address) => {
  const [ENSName, setENSName] = useState("");
  useEffect(() => {
    if (library && typeof address === "string") {
      let stale = false;

      library
        .lookupAddress(address)
        .then((name) => {
          if (!stale && typeof name === "string") {
            setENSName(name);
          }
        })
        .catch(() => {});

      return () => {
        stale = true;
        setENSName("");
      };
    }
  }, [library, address]);

  return ENSName;
}



export default function blank() { return <></>}
