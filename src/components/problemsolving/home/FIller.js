import React from "react";
import { useHistory } from "react-router-dom";
export default function Filler(props) {
  const history = useHistory();
  return (
    <div>
      <h6 style={{ marginTop: "15rem", textAlign: "center" }}>
        {props.message}
      </h6>
      <br />

      <h6
        style={{ color: "blue", textAlign: "center", cursor: "pointer" }}
        onClick={() => history.push("/addnewalgorithm")}
      >
        <u> Can You Contribute?</u>
      </h6>
    </div>
  );
}
