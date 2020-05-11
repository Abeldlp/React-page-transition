import React from "react";
import {Link} from  "react-router-dom"


const NavBar = () => {
  return(
    <div style={navbarColor}>
      <Link style={stylec1} to="/">Home</Link>
      <Link style={stylec1}  to="/about">About</Link>
      <Link style={stylec1}  to="/prices">Prices</Link>
    </div>
  )
}

const navbarColor = {
  backgroundColor: "grey",
  padding: 10
}

const stylec1 = {
  padding: 10,
  textDecoration: "none",
  color: "black"
}

export default NavBar;