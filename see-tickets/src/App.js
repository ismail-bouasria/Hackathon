import React from "react";
import HomeScreen from "./screen/homeScreen/Home";
import EventRatesScreen from "./screen/eventRatesScreen/EventRates";
import EventlistScreen from "./screen/eventlistScreen/Eventlist";
import CoordinatesScreen  from "./screen/CoordinatesScreen/Coordinates";
import ValidateScreen from "./screen/validationPageScreen/ValidationPage";
import PaymentScreen from "./screen/paymentScreen/Paiement";
import "./App.css";

function App() {
  return (
    <div>
      <HomeScreen />
      <EventlistScreen /> 
      <EventRatesScreen />
      <CoordinatesScreen /> 
      <PaymentScreen />
      <ValidateScreen />
    </div>
  );
}

export default App;
