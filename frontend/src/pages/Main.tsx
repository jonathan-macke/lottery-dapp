import { Link } from "react-router-dom";
import { useMetaMask } from "metamask-react";
import {Button, Alert} from 'react-bootstrap';




const Wallet = () => {

  const { status, connect, account, chainId, ethereum } = useMetaMask();
  if (status === "initializing") return <Alert key="warning" variant="warning">Synchronisation with MetaMask ongoing...</Alert>

  if (status === "unavailable") return <Alert key="danger" variant="danger">MetaMask not available</Alert>
  
  if (status === "notConnected") return <Button variant="primary" onClick={connect}>Connect to MetaMask </Button>
  
  if (status === "connecting") return <Alert key="info" variant="info">Connecting...</Alert>
  
  if (status === "connected") return <Alert key="success" variant="success">Connected account {account} on chain ID {chainId}</Alert>

  return null;
}

const Main = () => {
return (
 <>
    <Wallet />
    <h1 className="cover-heading">Lottery Dapp</h1>
    <p className="lead">
      Cover is a one-page template for building simple and beautiful home pages.
      Download, edit the text, and add your own fullscreen background photo to
      make it your own.
    </p>
    <p className="lead">
      <Link
        to="/voting"
        className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
      >
        Go to voting page
      </Link>
    </p>
  </>
)};

export default Main;
