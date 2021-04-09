//import { TextareaAutosize } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import "./content.css";
import Editor from "./Editor";

function Content({algoCode}) {
  console.log("here",algoCode);
  const [html, setHtml] = useState("#Happy Coding");
  // eslint-disable-next-line
  const [language, setLanguage] = useState("python");
  //const [algo,setAlgo]=useState("");


  useEffect(() => {
    console.log(algoCode);
    let asp = html+algoCode;
    setHtml(asp);
    // eslint-disable-next-line
  }, [algoCode])
  
  const Toimport =(imp)=>{
      setHtml(imp);
  }
  console.log("html",html)
  return (
    <div style={{ backgroundColor: "black", width: "100%" }}>
      <Editor
        language={language}
        displayName={language}
        value={html}
        onChange={Toimport}
      />
    </div>
  );
}

export default Content;

