import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">
        {" "}
        <Link className="nav-link" to="/">
          Lottery Dapp
        </Link>
      </h3>
      <nav className="nav nav-masthead justify-content-center">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/bet">
          Bet
        </NavLink>
        <NavLink className="nav-link" to="/settings">
          Settings
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
