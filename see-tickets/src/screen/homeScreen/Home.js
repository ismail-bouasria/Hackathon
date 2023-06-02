import React from "react";
import qrCode from "../../assets/image/QRCode.png";
import logo from "../../logo.png";
import "../homeScreen/Styles.css";

function HomeScreen() {
  return (
    <div className="HomeScreen-header">
      <div>
        <img src={logo} className="Home-logo" alt="logo" />
        <h1 className="Home-h1">See-Tickets</h1>
      </div>
      <div className="Home-QRCode">
        <img src={qrCode} alt="QRCode" />
      </div>
    </div>
  );
}

export default HomeScreen;
