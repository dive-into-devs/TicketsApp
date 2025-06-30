import { useState, useEffect } from "react";
import Herimg from './her.png';

export default function Messages({ name, onFinish }) {
  const messages = [
    `Oww… this is ${name} who stole my heart`,
    `From the moment I saw your smile, you lived in my mind`,
    `A beauty so rare, with a heart so kind.`,
    `Your laugh echoes in me, soft like a breeze`,
    `And every glance from you puts my soul at ease.`,
    `That video call? It sealed the deal`,
    `Your voice, your light too perfect to be real.`,
    `Since then, it’s you I see in every thought and dream`,
    `Like fate whispered softly, “She’s your queen.”`,
    `Even the moon gets me jealous at night`,
    `Because it watches you glow in silver light.`,
    `Your name means treasure, and it feels so true`,
    `Because finding you feels like my skies turned blue.`,
    `So now I ask you — not just in rhyme`,
    `But with a heart that’s been yours this whole time…`

  ];

  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
  if (index < messages.length - 1) {
    const timer = setTimeout(() => setIndex(index + 1), 1500);
    return () => clearTimeout(timer);
  } else {
    const showBtnTimer = setTimeout(() => setShowButton(true),500);
    return () => clearTimeout(showBtnTimer);
  }
}, [index]);

  return (
    <div className="messagescontainer">
      {index >= 0 && (
        <img
          src={Herimg}

          style={{ width: '200px', borderRadius: '1rem', marginBottom: '1rem' }}
        />
      )}
        <div className="messagesWrapper">
      {messages.slice(0, index + 1).map((msg, i) => (
          <p className="messages" key={i}>{msg}</p>
        ))}
        {showButton && (
  <button onClick={onFinish}>Let your heart speak 💖</button>
)}
        </div>

    </div>
  );
}
