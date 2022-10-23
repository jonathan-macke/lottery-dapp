import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">
        {" "}
        <Link className="nav-link" to="/">
          VotingDapp
        </Link>
      </h3>
      <nav className="nav nav-masthead justify-content-center">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/voting">
          Voting
        </NavLink>
        <NavLink className="nav-link" to="/utilities">
          Utilities
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
