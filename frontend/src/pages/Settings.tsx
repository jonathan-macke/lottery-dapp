import { useRef, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import {ethers} from "ethers";
import Lottery from '../assets/Lottery.json';


const contractAddress: any = process.env.REACT_APP_LOTTERY_CONTRACT;

const Settings = () => {
  const [state, setState] = useState("closed");

  const durationRef = useRef<HTMLInputElement>(null);
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const duration = durationRef?.current?.value;
    console.log(`submit form: ${duration}`);

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    console.log(`signer: ${signer}`);
    const contract = new ethers.Contract(
      contractAddress,
      Lottery.abi,
      provider).connect(signer);

    const currentBlock = await provider.getBlock("latest");
   
    try {
      const tx = await contract.openBets(currentBlock.timestamp + Number(duration), {gasLimit: 5000000});
      console.log({tx});
      const receipt = await tx.wait();
      console.log({receipt});
    } catch (e) {
      console.log(`Error ${e}`);
    }

    const isOpen = await contract.connect(signer).betsOpen()
    const lotteryState = isOpen ? "open" : "closed";
    console.log(`The lottery is ${lotteryState}\n`);
    setState(lotteryState);
  };

  return (
    <>
      <Alert key="info" variant="info">Lottery state: <strong>{state}</strong></Alert>
      <h1>Setup your bet</h1>
      <p className="lead">
        Lottery contract address: <strong>{contractAddress}</strong>
      </p>

      <form onSubmit={(e) => submitForm(e)}>
        <div className="form-group">
          <label htmlFor="Duration">Duration (in seconds)</label>
          <input
            ref={durationRef}
            type="text"
            className="form-control"
            name="duration"
            id="duration"
          />
        </div>
        <Button variant="primary" type="submit">Create your bet</Button>
          
      </form>
    </>
  );
};
export default Settings;
