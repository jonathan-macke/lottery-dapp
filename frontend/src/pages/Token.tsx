import { useRef, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import {ethers} from "ethers";
import Lottery from '../assets/Lottery.json';
import LotteryToken from '../assets/LotteryToken.json';


const contractAddress: any = process.env.REACT_APP_LOTTERY_CONTRACT;
const tokencontractAddress: any = process.env.TOKEN_CONTRACT;

const Token =   () => {
  let balance='';
  let amount='10';

  const [state, setState] = useState("unknown");
  
        const getTokenBalance=async()=>{  

            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              console.log(addressArray);
              const address=addressArray[0];
          
                const provider = await ethers.getDefaultProvider("goerli");
                const signer = address;
          
              
                const tokencontract = await
                new ethers.Contract(
                tokencontractAddress,
                LotteryToken.abi,
                provider).connect(signer); 
                const balanceBN = await tokencontract.balanceOf(signer);
                balance = ethers.utils.formatEther(balanceBN);
               console.log(
              `The account of address ${
             signer
              } has ${balance} Tokens\n`
            );
            return balance;
          }  
                   
          const buyToken=async()=>{
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              console.log(addressArray);
              const address=addressArray[0];
          
                const provider = await ethers.getDefaultProvider("goerli");
                const signer = address;
          
            try {
                console.log(`signer:  ${signer}`);
                const contract = await
                new ethers.Contract(
                contractAddress,
                Lottery.abi,
                provider).connect(signer); 
              
                  const tx = await contract.connect(signer).purchaseTokens({
                      value: ethers.utils.parseEther(amount),
                    });
                    const receipt = await tx.wait();
                    console.log(`Tokens bought (${receipt.transactionHash})\n`);
                }
                catch (e) {
                    console.log(`Error ${e}`);
                  }
              await getTokenBalance();
        }



       getTokenBalance();

    return (
      <>
       <Alert key="info" variant="info">Bet Balance: <strong>{balance}</strong></Alert>
      
        <button onClick={()=>buyToken()}> Buy 10 tokens</button>    
      </>
    );
 
  };



export default Token;
