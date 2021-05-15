import React, { useState } from "react";
import "./NavBar.css";
import AdaptLogo from "../../assets/adapt_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav>
      <span id="parentNav">
        <span className="logo">
          <img
            src={AdaptLogo}
            style={{ width: "42px", height: "42px", marginRight: "5px" }}
            alt="adapt_logo"
          />
          adapt
        </span>
        <span className="nav_buttons">
          <span>Sign in</span>
          <span>Free Trail</span>
          <button className="navButton">Request a demo</button>
        </span>
        <span className="ham" onClick={() => setshowMenu(!showMenu)}>
          {" "}
          <GiHamburgerMenu size={28} color={"#9d9d9d"} />
        </span>
      </span>
      {showMenu && (
        <span className="nav_small">
          <span>Sign in</span>
          <span>Free Trail</span>
          <button className="navButton">Request a demo</button>
        </span>
      )}
    </nav>
  );
};
