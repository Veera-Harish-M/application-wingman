import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Accordion, Button, Card } from "react-bootstrap";
import { TiArrowLeftThick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import "./description.css";
//import AlgoDisplay from "./algoDisplay";

export default function Description({
  closecallback,
  algoData,
  getSelectedAlgo,
}) {
  //  to display list of content or description
  const [Choose, setChoose] = useState(1);

  const [algo, setAlgo] = useState([]);
  const [selectedAlgo, setSelectedAlgo] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const varietyHandler = (name, id) => {
    setChoose(0);
    setSelectedAlgo(name);
    setSelectedId(id);
  };
  const truncateText = (text) => {
    if (text.length > 60) {
      text = text.substr(0, 60) + "...";
    }
    return text;
  };

  useEffect(() => {
    setAlgo(algoData);
    console.log("commming");
    setSelectedAlgo("");
  }, [algoData]);

  const onAlgoClick = (name, id) => {
    console.log("onclick", name);
    getSelectedAlgo(name);
  };

  return (
    <div className="details">
      {Choose === 1 ? (
        <div style={{ cursor: "pointer" }}>
          <div className="title">
            <b>Title</b>
            <span
              style={{
                position: "absolute",
                right: "0px",
                marginTop: "10px",
                marginRight: "15px",
                transform: "Translate(0%, -50%)",
                color: "red",
              }}
              onClick={() => {
                closecallback(0);
              }}
            >
              &times;
            </span>
          </div>

          <div style={{ overflowY: "auto", height: "80vh" }}>
            {algo.map((item, ids) => (
              <div>
                <span key={ids}>
                  <span className="descriptionList">
                    <List style={{ width: "100%", maxWidth: "36ch" }}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                textTransform: "capitalize",
                              }}
                            >
                              <b onClick={() => varietyHandler(item, ids)}>
                                {item.name}
                              </b>
                              <span
                                style={{
                                  fontSize: "0.7rem",
                                  color: "#a5a5a5",
                                }}
                              >
                                {item.timecomplexity}
                              </span>
                            </span>
                          }
                          secondary={
                            <React.Fragment>
                              {truncateText(item.description)}
                              <hr style={{ margin: "5px" }} />
                              <span
                                style={{
                                  cursor: "pointer",
                                  color: "blue",
                                  marginTop: "10px",
                                }}
                                onClick={() => onAlgoClick(item, ids)}
                              >
                                <b>Import Code</b>
                              </span>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </List>
                  </span>
                  {/*<AlgoDisplay
                    algoItem={item}
                    title={item.name}
                    onAlgoClick={onAlgoClick}
                    description={truncateText(item.description)}
                    timecomplexity={item.timecomplexity}
                    image={
                      "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"
                    }
                  />*/}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="title">
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ cursor: "pointer" }} onClick={() => setChoose(1)}>
                <TiArrowLeftThick size={18} color="red" />
              </span>

              <h5>{selectedAlgo.name}</h5>
              <MdCancel
                style={{ cursor: "pointer", marginTop: "7px" }}
                onClick={() => {
                  closecallback(0);
                }}
                size={15}
                color="red"
              />
            </span>
          </div>
          <div style={{ overflowY: "auto", height: "80vh" }}>
            <Accordion defaultActiveKey="0">
              <Card className="cardBody">
                <Card.Header className="cardHeader">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    style={{ cursor: "pointer" }}
                  >
                    Description
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body style={{ height: "42vh", overflowY: "auto" }}>
                    {selectedAlgo.description}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="cardBody">
                <Card.Header className="cardHeader">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="1"
                    style={{ cursor: "pointer" }}
                  >
                    Where To Use
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{ height: "42vh", overflowY: "auto" }}>
                    {selectedAlgo.usage}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="cardBody">
                <Card.Header className="cardHeader">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="2"
                    style={{ cursor: "pointer" }}
                  >
                    Time & Space Complexity
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body style={{ height: "42vh", overflowY: "auto" }}>
                    Space Complexity : {selectedAlgo.spacecomplexity}
                    <br />
                    Time Complexity : {selectedAlgo.timecomplexity}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="cardBody">
                <Card.Header className="cardHeader">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="3"
                    style={{ cursor: "pointer" }}
                  >
                    View & Import code
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body style={{ height: "42vh", overflowY: "auto" }}>
                    <pre style={{ color: "white", paddingBottom: "20px" }}>
                      {selectedAlgo.code}
                    </pre>
                    <Button
                      variant="success"
                      onClick={() => onAlgoClick(selectedAlgo, selectedId)}
                    >
                      Import Code
                    </Button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      )}
    </div>
  );
}
