import { useState } from 'react';

export default function Name({ onNext, setName }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (input.trim() !== '') {
      if (input === "Amber" || input === "amber") {
        setName(input);
        onNext(1); // Move to Messages step
      } else {
        setError("Don't lie 😅");
      }
    }
  };

  return (
    <div className="inputwrapper">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Continue</button>
      {error && <p className='errormsg'>{error}</p>}

    </div>
  );
}
