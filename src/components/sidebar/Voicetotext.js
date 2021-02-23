import React, {useState, useEffect} from 'react';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

function Voicetotext() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  //const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    handleListen();
    // eslint-disable-next-line
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log('continue..');
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log('Stopped Mic on Click');
      };
    }
    mic.onstart = () => {
      console.log('Mics on');
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  // const handleSaveNote = () => {
  // 	setSavedNotes([...savedNotes, note]);
  // 	setNote("");
  // };

  return (
    <>
      <h1>Voice Notes</h1>

      <div className="box">
        <h2>Current Note</h2>
        {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
        <button onClick={() => setIsListening((prevState) => !prevState)}>
          Start/Stop
        </button>
        <p style={{color: 'white'}}>{note}</p>
      </div>
    </>
  );
}

export default Voicetotext;