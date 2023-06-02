import logo from './logo.svg';
import './App.css';
import Products from './composants/bouton';
import Formulaire from './screen/PaiementScreen';


function App() {
  return (
    <div className="flex flex-col justify-center h-screen items-center bg-gradient-to-b">
      
        
        {/* <div><Products /></div> */}
        <Formulaire />

    </div>
  );
}



export default App;
