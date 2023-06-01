import React from 'react';
import qrCode from './QRCode.png';
import logo from './logo.png';
import EventRatesScreen from './screen/EventRatesScreen';
import './App.css';


function App() {

  return (
    <div className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-h1">See-Tickets</h1>
      </div>
      <div className="App-QRCode">
        <img src={qrCode} alt="QRCode" />
      </div>
      
      <EventRatesScreen />
 
    </div>
  );
}

export default App;


