import logo from './logo.svg';
import './App.css';
import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';

function App() {
  const [fast, setFast] = useState(true);

  const handleSpeed = () => {
    setFast(!fast);
    console.log(fast);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dream FAN</h1>
        <img style={{ borderRadius: '50%' }} src={'https://i.ibb.co/nQ4gNP6/pngwing-com-1.png'} className={fast === true ? 'App-logo' : 'appTo'} alt="logo" />
        <p>
          Table Fan
        </p>
        <button style={{ borderRadius: '50%', width: '80px', height: '80px', fontWeight: 'bold' }} onClick={handleSpeed}>{fast === true ? 'Off' : 'On'}</button>
      </header>
    </div>
  );
}

export default App;
