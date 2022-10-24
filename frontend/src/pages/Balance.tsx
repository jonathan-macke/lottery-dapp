import { useRef, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import  hre  from "hardhat";
import '@nomiclabs/hardhat-ethers'
import { ethers } from "ethers";

const Balance =   () => {

  const [state, setState] = useState("unknown");
  var signer='';
  let balance='';

  const getBalance=async()=>{

    if (window.ethereum.isMetaMask) {

    const addressArray = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
     console.log(addressArray);

     const address=addressArray[0];

     signer = address;
    }
    const provider = await ethers.getDefaultProvider("goerli");
    
        try {    
          const balanceBN = await hre.ethers.provider.getBalance(
             signer
           );
            balance = ethers.utils.formatEther(balanceBN);
              console.log(
                `The account of address ${
               signer
                } has ${balance} ETH\n`);
    }
       catch (e) {
       console.log(`Error ${e}`);
     }
    }
  getBalance()
    return (
      <>
       <Alert key="info" variant="info">Lottery state: <strong>{balance}</strong></Alert>
        <h1>This is your bet state</h1>
       
   
      </>
    );
 
  };



export default Balance;
