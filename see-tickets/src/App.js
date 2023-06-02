import React, { Text } from "react";
import HomeScreen from "./screen/homeScreen/Home";
import EventRatesScreen from "./screen/eventRatesScreen/EventRates";
import EventlistScreen from "./screen/eventlistScreen/Eventlist";
import CoordinatesScreen from "./screen/CoordinatesScreen/Coordinates";
import ValidatePageScreen from "./screen/validationPageScreen/ValidationPage";
import PaymentScreen from "./screen/paymentScreen/Paiement";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestRouter from './component/event';




function App() {

  return (
      <BrowserRouter>

        <Routes>
          {/* <Route index element={<HomeScreen />} /> */}
          <Route index element={<EventlistScreen />} />
          <Route path="/shows/:id" element={<EventRatesScreen/>} />
          <Route path="/coord" element={<CoordinatesScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/validate" element={<ValidatePageScreen />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

    // <div>
      {/* <HomeScreen />
      <EventlistScreen />
      <EventRatesScreen />
      <CoordinatesScreen />
      <PaymentScreen />
      <ValidatePageScreen /> */}