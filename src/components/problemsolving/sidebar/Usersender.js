import React from "react";
import "./chart.css";

export default function Usersender(props) {
  const { word } = props;
  return (
    <div style={{ fontFamily: "Josefin Sans, sans-serif" }}>
      <div className='boxs sent'>{word}</div>
    </div>
  );
}
