import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const favousData = useSelector((state) => state.favous.value)
  return (
    <div className="navbar">
      <div className="container">
        <h3><Link to={"/"}>CustomerFAVS NEXT</Link> </h3>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/customers"}>Customers</Link></li>
          <li>
            <Link to={"/favourites"}>Favourites
            <sup>{favousData.length}</sup></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
