import React from "react";
import "./chart.css";

export default function Botsender(props) {
  const { word } = props;
  return (
    <div className='boxx received'>
      <p style={{ fontSize: "13px" }}>
        <b>
          <em>Bot</em>
        </b>
      </p>
      {word}
    </div>
  );
}
