//import { SignalWifi1BarLock } from "@material-ui/icons";
import React from "react";
import { Alert } from "react-bootstrap";
import { GoSettings } from "react-icons/go";

export default function HeaderBot() {
  return (
    <div>
      <Alert variant='primary' style={{ padding: "10px", marginBottom: "0px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <b>Bot</b>
          <span>
            <GoSettings size={22} color='black' style={{ cursor: "pointer" }} />
          </span>
        </div>
      </Alert>
    </div>
  );
}
