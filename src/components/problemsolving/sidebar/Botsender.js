import React from "react";
import "./chart.css";

export default function Botsender(props) {
  const { word } = props;
  return (
    <div
      className='boxx received'
      style={{ fontFamily: "Work Sans,sans-serif" }}>
      <div style={{ fontSize: "13px", fontFamily: "Josefin Sans, sans-serif" }}>
        <b>
          <em>Bot</em>
        </b>
      </div>
      {word}
    </div>
  );
}
