import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

function Navigation(props) {
//   setTimeout(() => {
//     props.history.push("/about");
//   }, 3000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          App
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Home</Link> {/*  change anchor tag  */}
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
            {/*NavLink include active calss used to add styles*/}
          </li>
          <li>
            <Link to="/more">More</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navigation); //higher order Component
