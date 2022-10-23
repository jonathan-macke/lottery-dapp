import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import {ethers} from "ethers";
import * as LotteryJson from '../assets/Lottery.json';


const contractAddress: any = process.env.REACT_APP_LOTTERY_CONTRACT;

const Settings = () => {
  
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
      LotteryJson.abi,
      provider).connect(signer);

    const currentBlock = await provider.getBlock("latest");
    const tx = await contract.openBets(currentBlock.timestamp + Number(duration));
    console.log({tx});
    const receipt = await tx.wait();
    console.log({receipt});
  };

  return (
    <>
      <h1>Setup your bet</h1>
      <p className="lead">
        Lottery  is: <strong>{contractAddress}</strong>
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
