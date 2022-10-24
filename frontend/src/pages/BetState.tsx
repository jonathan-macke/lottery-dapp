import { useRef, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import {ethers} from "ethers";
import Lottery from '../assets/Lottery.json';

const contractAddress: any = process.env.REACT_APP_LOTTERY_CONTRACT;
const BetState =   () => {

  const [state, setState] = useState("unknown");
  var signer='';

  const getBetStatus=async()=>{
   
    if (window.ethereum.isMetaMask) {

    const addressArray = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
     console.log(addressArray);

     const address=addressArray[0];

     signer = address;
    }
      const provider = ethers.getDefaultProvider("goerli");
 
      console.log(`signer:  ${signer}`);
      const contract = 
      new ethers.Contract(
      contractAddress,
      Lottery.abi,
      provider).connect(signer); 

     const currentBlock = await provider.getBlock("latest");
     console.log(`Current Block time  `+currentBlock.timestamp);
  
    try {
      const state =await contract.betsOpen()
     // const state =await contract.connect(signer).betsOpen()
      console.log(state);
      console.log(`The lottery is ${state? "open" : "closed"}\n`);
      if (!state) return;
      const currentBlockDate = new Date(currentBlock.timestamp * 1000);
      const closingTime = await contract.betsClosingTime();
      const closingTimeDate = new Date(closingTime.toNumber() * 1000);
      console.log(
        `The last block was mined at ${currentBlockDate.toLocaleDateString()} : ${currentBlockDate.toLocaleTimeString()}\n`
      );
      console.log(
        `lottery should close at  ${closingTimeDate.toLocaleDateString()} : ${closingTimeDate.toLocaleTimeString()}\n`
      );

    const lotteryState = state ? "open" : "closed";
    console.log(`The lottery is ${lotteryState}\n`);
    setState(lotteryState);

    } catch (e) {
      console.log(`Error ${e}`);
    }
  }
    return (
      <>
       <Alert key="info" variant="info">Lottery state: <strong>{state}</strong></Alert>
        <h1>This is your bet state</h1>
       
    <button  onClick={()=>getBetStatus()}> Check state</button>
      </>
    );
 
  };



export default BetState;
