
import React from "react";
import HomeScreen from "./screen/homeScreen/Home";
import EventRatesScreen from "./screen/eventRatesScreen/EventRates";
import EventlistScreen from "./screen/eventlistScreen/Eventlist";
import CoordinatesScreen  from "./screen/CoordinatesScreen/Coordinates";
import ValidateScreen from "./screen/validationPageScreen/ValidationPage";
import PaymentScreen from "./screen/paymentScreen/Paiement";
import "./App.css";
import Text from './screen/ValidationPageScreen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Eventlist from './screen/EventlistScreen'
import TestRouter from './component/event';




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

     

    
    
    
    <BrowserRouter>
    <Text /> 
      <Routes>
        <Route index element={<Eventlist />}/>
        <Route path="/event" element={<TestRouter />}/>

      </Routes>
      </BrowserRouter>

  );
}

export default App;
