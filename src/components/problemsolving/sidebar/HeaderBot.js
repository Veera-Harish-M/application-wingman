//import { SignalWifi1BarLock } from "@material-ui/icons";
import React from "react";
import { GoSettings } from "react-icons/go";

export default function HeaderBot() {
  return (
    <div style={{ padding: "15px",boxShadow:" 0 8px 7px -7px #3c3c3c", color:"#fff",background: "#000b18",fontSize:"15px"}}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <b>Bot</b>
          <span>
            <GoSettings size={22} color='white' style={{ cursor: "pointer" }} />
          </span>
        </div>

    </div>
  );
}
