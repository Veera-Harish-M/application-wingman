import React from "react";

export default function Filler(props) {
  return (
    <div>
      <h6 style={{ marginTop: "15rem", textAlign: "center" }}>
        {" "}
        {props.message}
      </h6>
      <br />

      <h6
        style={{ color: "blue", textAlign: "center", cursor: "pointer" }}
        onClick={() => props.history.push("/addnewalgorithm")}
      >
        <u> Can You Contribute?</u>
      </h6>
    </div>
  );
}
