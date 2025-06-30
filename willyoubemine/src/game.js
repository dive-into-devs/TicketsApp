import { useState, useEffect } from "react";
import Myimg from './mine.png';
import Pleaseimg from './please.png';
import Yayimg from './yay.png';
export default function Game({name}) {
  const [attempts, setAttempts] = useState(0);
  const [showRetryMessage, setShowRetryMessage] = useState(false);
  const [currentImage, setCurrentImage] = useState(Myimg);
  const [isAccepted, setIsAccepted] = useState(false);
  function handletheclick() {
    setAttempts(attempts + 1);
    setShowRetryMessage(true);
    setCurrentImage(Pleaseimg);
  }


  function handletheyesclick(){
    setShowRetryMessage(false)
    setCurrentImage(Yayimg);
    setIsAccepted(true);
  }

  // 👇 Auto-hide after 40 seconds
  useEffect(() => {
    if (showRetryMessage) {
      const timer = setTimeout(() => setShowRetryMessage(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showRetryMessage]);

  return (
    <div className="Gamecontainer">
      <img
        src={currentImage}
        style={{ width: '200px', borderRadius: '1rem', marginBottom: '1rem' }}
      />
       {showRetryMessage && (
        <div className="again">
          <p>"You look a bit confused {name}... just think about it again 😌"</p>
        </div>
      )}
     {!isAccepted && (
       <>
       <b className="Question">Will you be my princess? 👑</b>
    <button onClick={handletheyesclick}>YES</button>
    <button onClick={handletheclick}>NO</button>
  </>
)}

{isAccepted && (
  <div className="last">
    <p>
      That’s a good decision… the crown suits you perfectly, treasure. 💖
    </p>
  </div>
)}


    </div>
  );
}
