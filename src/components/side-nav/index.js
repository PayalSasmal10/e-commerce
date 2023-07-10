import React from "react";
import "./side-nav.css";
import partypopper from "../../assets/images/partypopper.svg";

const SideNav = () => {
  return (
    <div className="side-nav">
      <h1 className="companyname">E.COM</h1>
      <div className="firstCard">
        <p>Dashboard</p>
        <p>Products</p>
        <p>Settings</p>
        <p>Logout</p>
      </div>
      <div className="secondCard">
        <div className="secondCardDown">
          <img src={partypopper} alt="party-popper" className="partpopper" />
          <p>Get Premium</p>
          <p>Features at</p>
          <p>25% off</p>
          <button>UPGRADE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
