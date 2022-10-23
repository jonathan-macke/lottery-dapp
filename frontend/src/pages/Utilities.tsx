import { useEffect, useRef, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const Utilities = () => {
  const [contractAddress, setContractAddress] = useState("Loading ...");
  const [respMessage, setRespMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const addressRef = useRef<HTMLInputElement>(null);

  const toggleShowToast = () => setShowToast(!showToast);

  useEffect(() => {
    fetch("http://localhost:3000/token-address")
      .then((response) => response.json())
      .then((data) => setContractAddress(data.result));
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address: addressRef?.current?.value }),
    };
    fetch("http://localhost:3000/claim-tokens", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        if (!data.result) {
          setRespMessage("An error occured!");
        } else {
          setRespMessage(
            "Everything went fine! Order for voting token has been submitted successfully!"
          );
        }
        toggleShowToast();
      });
  };

  return (
    <>
      <h1>Utilities Works!</h1>
      <p className="lead">
        Contract address is: <strong>{contractAddress}</strong>
      </p>
      <form onSubmit={(e) => submitForm(e)}>
        <div className="form-group">
          <label htmlFor="Address">ETH Address</label>
          <input
            ref={addressRef}
            type="text"
            className="form-control"
            name="address"
            id="address"
            aria-describedby="addressHelp"
            placeholder="0x..."
          />
          <small id="addressHelp" className="form-text text-muted">
            Enter the ETH address that will receive voting token
          </small>
        </div>
        <button
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
          type="submit"
        >
          Get voting token
        </button>
      </form>
      <ToastContainer className="p-3" position="top-end">
        <Toast
          show={showToast}
          onClose={toggleShowToast}
          delay={3000}
          autohide
          bg={"info"}
        >
          <Toast.Header className="text-black">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Information</strong>
          </Toast.Header>
          <Toast.Body className="text-black">{respMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
export default Utilities;
