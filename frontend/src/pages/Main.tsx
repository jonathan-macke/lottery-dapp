import { Link } from "react-router-dom";

const Main = () => (
  <>
    <h1 className="cover-heading">Voting Dapp</h1>
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
);

export default Main;
