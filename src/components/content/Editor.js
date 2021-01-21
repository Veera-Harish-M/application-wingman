import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/python/python';
// import "codemirror/mode/javascript/javascript";
// import "codemirror/mode/jsx/jsx";
import 'codemirror/mode/clike/clike';

import {Controlled as ControlledEditor} from 'react-codemirror2';

function Editor(props) {
  const {language, displayName, value, onChange} = props;
  function handleChange(editor, data, value) {
    onChange(value);
    console.log(displayName);
  }
  return (
    <div
      className="kj"
      style={{
        backgroundColor: 'white',
      }}
    >
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: {language},
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default Editor;
