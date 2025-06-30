import './App.css';
import Name from './name';
import Messages from './messages';
import Game from './game';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className='container'>
      {step === 0 && <Name onNext={setStep} setName={setName} />}
      {step === 1 && <Messages name={name} onFinish={() => setStep(2)} />}
      {step === 2 && <Game name={name} onYes={() => setStep(3)} />}
    </div>
  );
}

export default App;
