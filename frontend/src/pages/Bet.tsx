import { ethers } from "ethers";
import { Alert, Button } from "react-bootstrap";
import Metamask from "../components/Metamask";
import Lottery from '../assets/Lottery.json';
import { useRef, useState } from "react";

const contractAddress: any = process.env.REACT_APP_LOTTERY_CONTRACT;
const Bet =  () => {

  const [state, setState] = useState("closed");

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
    console.log(`signer: ${signer}`);
    const contract = new ethers.Contract(
      contractAddress,
      Lottery.abi,
      provider).connect(signer);

  let lotteryState : string = "";
  contract.connect(signer).betsOpen().then((isOpen: boolean) => {
    lotteryState = isOpen ? "open" : "closed";
    console.log(`The lottery is ${lotteryState}\n`);
    setState(lotteryState);
  });

  const amountRef = useRef<HTMLInputElement>(null);
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const amount: string = amountRef?.current?.value || "0";
    console.log(`submit form: ${amount}`);

    const tx = await contract.connect(signer).purchaseTokens({
      value: ethers.utils.parseEther(amount),
    });
    console.log({tx});
    const receipt = await tx.wait();
    console.log({receipt});
  }

  return (<>
    <Alert key="info" variant="info">Lottery state: <strong>{state}</strong></Alert>
    <h1>Buy tokens</h1>

    <form onSubmit={(e) => submitForm(e)}>
      <div className="form-group">
      <label htmlFor="Amount">Amount</label>
          <input
            ref={amountRef}
            type="text"
            className="form-control"
            name="amount"
            id="amount"
          />
      </div>
      <Button variant="primary" type="submit">Buy</Button>
        
    </form>
  </> 
  )
};
export default Bet;
