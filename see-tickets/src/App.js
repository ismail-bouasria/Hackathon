import './App.css';
import Text from './screen/ValidationPageScreen';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import Eventlist from './screen/EventlistScreen'
import TestRouter from './component/event';



function App() {

  return (
     

    
    
    
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
