import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Preloader from './preloader/Preloader';


function App() {
  const [isClicked, setIsClicked] = useState(false);

  
  return (
    <div className="App">
      <div className="wrapper">
        {isClicked ? <Preloader className="preloader" delay="3000"/> 
        : <Button onClick={() => setIsClicked(true)} variant="contained">Click me</Button>}
      </div>
    </div>
  );
}

export default App;
