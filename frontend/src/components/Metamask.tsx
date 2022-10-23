
import { useMetaMask } from "metamask-react";
import {Button, Alert} from 'react-bootstrap';

const Metamask = () => {

    const { status, connect, account, chainId, ethereum } = useMetaMask();
    if (status === "initializing") return <Alert key="warning" variant="warning">Synchronisation with MetaMask ongoing...</Alert>
  
    if (status === "unavailable") return <Alert key="danger" variant="danger">MetaMask not available</Alert>
    
    if (status === "notConnected") return <Button variant="primary" onClick={connect}>Connect to MetaMask </Button>
    
    if (status === "connecting") return <Alert key="info" variant="info">Connecting...</Alert>
    
    if (status === "connected") return <Alert key="success" variant="success">Connected account {account} on chain ID {chainId}</Alert>
  
    return null;
  }

  export default Metamask;