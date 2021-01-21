//import { TextareaAutosize } from "@material-ui/core";
import React, {useState} from 'react';
import './content.css';
import Editor from './Editor';
function Content() {
  const [html, setHtml] = useState('Happy Coding');
  // eslint-disable-next-line
  const [language, setLanguage] = useState('python');

  return (
    <div style={{backgroundColor: 'black', height: '100%', width: '100%'}}>
      {/* <TextareaAutosize 
	  
        style={{
          backgroundColor: 'black',
          height: '100%',
          width: '100%',
          border: 'none',
          color: 'white',
        }}
      ></TextareaAutosize> */}
      <Editor
        language={language}
        displayName={language}
        value={html}
        onChange={setHtml}
      />
    </div>
  );
}

export default Content;
