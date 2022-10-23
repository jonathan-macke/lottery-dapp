import { Link } from "react-router-dom";
import Metamask from "../components/Metamask";

const Main = () => {
return (
 <>
    <Metamask />
    <h1 className="cover-heading">Lottery Dapp</h1>
    <p className="lead">
      Cover is a one-page template for building simple and beautiful home pages.
      Download, edit the text, and add your own fullscreen background photo to
      make it your own.
    </p>
    <p className="lead">
      <Link
        to="/bet"
        className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
      >
        Go to voting page
      </Link>
    </p>
  </>
)};

export default Main;
