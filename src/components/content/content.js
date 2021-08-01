// //import { TextareaAutosize } from "@material-ui/core";
// import React, { useState,useEffect } from "react";
// import "./content.css";
// import Editor from "./Editor";

// function Content({algoCode}) {
//   console.log("here",algoCode);
//   const [html, setHtml] = useState("Happy Coding");
//   // eslint-disable-next-line
//   const [language, setLanguage] = useState("python");
//   //const [algo,setAlgo]=useState("");

//   useEffect(() => {
//     console.log(algoCode);
//     let asp = html+algoCode;
//     setHtml(asp);
//   }, [algoCode])

//   const Toimport =(imp)=>{
//       setHtml(imp);
//   }
//   console.log("html",html)
//   return (
//     <div style={{ backgroundColor: "black", width: "100%" }}>
//       <Editor
//         language={language}
//         displayName={language}
//         value={html}
//         onChange={Toimport}
//       />
//     </div>
//   );
// }

// export default Content;

import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function Content({ algoCode, codesOrigin, onChangeCode }) {
  const [language] = useState("python");
  const [code, Setcode] = useState(codesOrigin);
  console.log("outside", algoCode);

  useEffect(() => {
    // console.log("inside", algoCode);
    let asp = code + algoCode;
    handleEditorChange(asp);
    // eslint-disable-next-line
  }, [algoCode]);

  useEffect(() => {
    console.log("code origin coming");
    console.log(codesOrigin);
    handleEditorChange(codesOrigin);
    // eslint-disable-next-line
  }, [codesOrigin]);

  function handleEditorChange(value) {
    console.log(value);
    onChangeCode(value);
    Setcode(value);
    console.log("here is the current model value:", code);
  }
  return (
    <div>
      <Editor
        height="91vh"
        theme="vs-dark"
        defaultLanguage={language}
        //defaultValue={code}
        value={code}
        onChange={handleEditorChange}
      />
    </div>
  );
}
