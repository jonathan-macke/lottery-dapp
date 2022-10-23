import { useRef, useState } from "react";
import { Button } from "react-bootstrap";


const contractAddress = process.env.REACT_APP_LOTTERY_CONTRACT;

const Settings = () => {
  
  const durationRef = useRef<HTMLInputElement>(null);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`submit form: ${durationRef?.current?.value}`);
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
