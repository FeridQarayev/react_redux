import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <h3><Link to={"/"}>CustomerFAVS NEXT</Link> </h3>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/customers"}>Customers</Link></li>
          <li>
            <Link to={"/favourites"}>Favourites
            <sup>0</sup></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
