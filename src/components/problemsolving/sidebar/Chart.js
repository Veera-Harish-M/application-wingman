import React, { useState, useEffect } from "react";
import "./chart.css";
import Botsender from "./Botsender";
import Usersender from "./Usersender";
import { IoMdSend } from "react-icons/io";
import { FiMic, FiMicOff } from "react-icons/fi";
import ScrollableFeed from "react-scrollable-feed";

// get mic permission
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

export default function Chart(props) {
  const { val } = props;
  console.log(val);
  // mic rec
  const [isListening, setIsListening] = useState(false);
  // chat history
  // const [fillup, setFillup] = useState([
  //   { id: "0", msg: "welcome !helo", who: "bot" },
  //   { id: "1", msg: "welcome !helo", who: "bot" },
  //   { id: "2", msg: "helo", who: "user" },
  // ]);
  // giving id to insert in chat histery
  const [ids, Setids] = useState(3);
  // get input from user
  const [inp, setInp] = useState("");

  const getfinialinput = () => {
    if (inp.length >= 1) {
      console.log(inp);
      var a = inp;
      // val.onChange([...val, { id: ids, msg: a, who: "user" }]);
      props.onChange([...val, { id: ids, msg: a, who: "user" }],a);
      var temp = ids + 1;
      Setids(temp);
      setInp("");
      setIsListening(false)
      //send to backend
    }
  };

  // get ride of mic
  useEffect(() => {
    handleListen();
    // eslint-disable-next-line
  }, [isListening]);
  //mic handle
  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      // setNote(transcript);
      setInp(transcript);
      console.log(inp);
      setInp("");
      

      mic.onerror = (event) => {
        console.log(event.error);
      };
      
    };
  };

  return (
    <div>
      <div
        style={{
          margin: "0px",
          height: "73vh",
          overflowY: "auto",
        }}
        id='style-4'>
        <ScrollableFeed>
          {val.map((item, ids) => (
            <div key={ids}>
              {item.who === "bot" ? (
                <Botsender word={item.msg} />
              ) : (
                <Usersender word={item.msg} />
              )}
            </div>
          ))}
        </ScrollableFeed>
      </div>
      <div>
        {isListening ? (
          <span
            onClick={() => setIsListening((prevState) => !prevState)}
            style={{ cursor: "pointer" }}>
            <FiMicOff size={20} color='red' />
          </span>
        ) : (
          <span
            onClick={() => setIsListening((prevState) => !prevState)}
            style={{ cursor: "pointer" }}>
            <FiMic size={20} color='red' />
          </span>
        )}
        <input
          type='text'
          placeholder='Say hi'
          value={inp}
          className='msgget'
          onChange={(event) => {
            setInp(event.target.value);
            console.log(inp);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && e.shiftKey === false) {
              console.log("onclicked");
              getfinialinput();
            }
          }}
        />
        <span onClick={getfinialinput} style={{ cursor: "pointer" }}>
          <IoMdSend size={28} color='#0088cc' style={{ marginBottom: "5px" }} />
        </span>
      </div>
    </div>
  );
}
