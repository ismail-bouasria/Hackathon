import React from 'react';
import DisplayCoordinates from './screen/CoordinatesScreen';
import DisplayPaiement from './screen/PaiementScreen';
import DisplayDetailEvent from './screen/DetailEventScreen';

function App() {
  return (
      <div>
        <DisplayCoordinates />
        <DisplayPaiement />
        <DisplayDetailEvent />
      </div>
  );
}

export default App;
