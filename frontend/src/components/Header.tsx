import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">
        {" "}
   <nav>    <Link className="nav-link" to="/">
          Lottery Dapp   
        </Link> </nav> 
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

        <NavLink className="nav-link" to="/betState">
         BetState
        </NavLink>

        
        <NavLink className="nav-link" to="/Token">
        Token
        </NavLink>

         
        <NavLink className="nav-link" to="/Balance">
        Balance
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
