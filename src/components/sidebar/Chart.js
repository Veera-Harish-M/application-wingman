import React, {useState, useEffect} from 'react';
import './chart.css';
import Botsender from './Botsender';
import Usersender from './Usersender';
import {IoMdSend} from 'react-icons/io';
//import Voicetotext from "./Voicetotext";
import {FiMic, FiMicOff} from 'react-icons/fi';
import './scroll.css';

// get mic permission
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

export default function Chart() {
  // mic rec
  const [isListening, setIsListening] = useState(false);
  // const [note, setNote] = useState(null);
  // bot from node
  const [fillup, setFillup] = useState([
    {id: '0', msg: 'welcome !helo', who: 'bot'},
    {id: '1', msg: 'welcome !helo', who: 'bot'},
    {id: '2', msg: 'helo', who: 'user'},
  ]);
  const [ids, Setids] = useState(3);
  const [inp, setInp] = useState('');

  const handle = (event) => {
    setInp(event.target.value);
    console.log(inp);
  };
  // const getvalue = (e) => {
  // 	setInp(e.target.value);
  // 	console.log(inp);
  // };
  const onEnterPress = (e) => {
    if (inp.length >= 1) {
      console.log(inp);
      var a = inp;
      setFillup([...fillup, {id: ids, msg: a, who: 'user'}]);
      var temp = ids + 1;
      Setids(temp);
      setInp('');
    }
  };
  const holdon = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      if (inp.length >= 1) {
        console.log(inp);
        var a = inp;
        setFillup([...fillup, {id: ids, msg: a, who: 'user'}]);
        var temp = ids + 1;
        Setids(temp);
        setInp('');
      }
    }
  };

  // get ride of mic
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
      // setNote(transcript);
      setInp(transcript);
      console.log(inp);

      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <div>
      <div
        style={{
          margin: '0px',
          height: '76vh',
          overflowY: 'scroll',
        }}
        id="style-4"
      >
        {fillup.map((item) => (
          <div>
            {item.who === 'bot' ? (
              <Botsender word={item.msg} />
            ) : (
              <Usersender word={item.msg} />
            )}
          </div>
        ))}
      </div>
      {/* <Botsender word={Bot} />
			<Usersender word={User} /> */}
      <div>
        {isListening ? (
          <span
            onClick={() => setIsListening((prevState) => !prevState)}
            style={{cursor: 'pointer'}}
          >
            <FiMicOff size={20} color="red" />
          </span>
        ) : (
          <span
            onClick={() => setIsListening((prevState) => !prevState)}
            style={{cursor: 'pointer'}}
          >
            <FiMic size={20} color="red" />
          </span>
        )}
        <input
          type="text"
          placeholder="Say hi"
          value={inp}
          className="msgget"
          onChange={handle}
          onKeyDown={holdon}
        />
        <span onClick={onEnterPress} style={{cursor: 'pointer'}}>
          <IoMdSend size={28} color="#0088cc" style={{marginBottom: '5px'}} />
        </span>
      </div>
    </div>
  );
}
