import logo from './logo.svg';
import './App.css';
import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';

function App() {
  const [fast, setFast] = useState(false);

  const handleSpeed = () => {
    setFast(!fast);
    console.log(fast);
  }

  return (
    <div className="App">
      <header style={{
        backgroundImage: `url("https://i.gifer.com/tRm.gif")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
      }} className="App-header">
        <div className='titleT'>
          <h2>{fast === true ? 'ReacTor status : ON' : 'ReacTor status : OFF'}</h2>
        </div>
        <img style={{ borderRadius: '50%', height: '350px', width: '350px' }} src={'https://i.ibb.co/FWRVR9f/output-onlinegiftools-1.gif'} className={fast === true ? 'App-logo' : 'appTo'} alt="logo" />
        <p>
          Press the button
        </p>
        <button style={{ borderRadius: '30%', width: '100px', height: '80px', fontWeight: 'bold' }} onClick={handleSpeed}>{fast === true ? 'OFF' : 'On'}</button>
      </header>
    </div>
  );
}

export default App;
