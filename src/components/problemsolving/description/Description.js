import React, { useState } from "react";
import { Alert, Accordion, Button, Card } from "react-bootstrap";
import { TiArrowLeftThick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

export default function Description({ closecallback, listoforder, useforalg }) {
  //  to display list of content or description
  const [Choose, setchoose] = useState(1);
  // title to display
  // const [Title, settitle] = useState("Sort Alogrithm");
  const [Title] = useState("Sort Alogrithm");
  //temp catlog
  // const [catlog, Setcatlog] = useState(listoforder);
  const [catlog] = useState(listoforder);
  //where to use
  // const [touse, settouse] = useState(useforalg);
  const [touse] = useState(useforalg);
  //clicked alg name
  const [algname, setalgname] = useState("");
  //display description of selected alg
  //const [showdescription, setshowdescription] = useState("tosetthis");
  //display where to use of selected alg
  //const [wheretouse, setwheretouse] = useState("tosetthis");
  //handle list of content or description
  const varityhandler = (name, id) => {
    setchoose(0);
    setalgname(name);
  };
  return (
    <div>
      {Choose === 1 ? (
        <div>
          <Alert variant='primary'>
            <Alert.Heading className='mb-0'>
              {Title}
              <span
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "0px",
                  padding: "12px 16px",
                  transform: "Translate(0%, -50%)",
                  color: "red",
                }}
                onClick={() => {
                  closecallback(0);
                }}>
                &times;
              </span>
            </Alert.Heading>
          </Alert>
          <div style={{ overflowY: "auto", height: "80vh" }}>
            {catlog.map((item, ids) => (
              <span key={ids} onClick={() => varityhandler(item, ids)}>
                {/* onClick={() => varityhandler(item, ids)} */}
                <Card
                  bg={"primary"}
                  style={{
                    cursor: "pointer",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                  className='mb-2'>
                  <Card.Body>
                    <Card.Title>{item}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                      {touse}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Alert variant={"primary"}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ cursor: "pointer" }} onClick={() => setchoose(1)}>
                <TiArrowLeftThick size={25} color='red' />
              </span>
              <h5 className='mb-0'>{algname}</h5>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  closecallback(0);
                }}>
                <MdCancel size={25} color='red' />
              </span>
            </div>
          </Alert>
          <Accordion
            defaultActiveKey='0'
            style={{ backgroundColor: "#343a40" }}>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='0'
                  style={{ cursor: "pointer" }}>
                  Description
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body style={{ height: "42vh", overflowY: "auto" }}>
                  Hello! I'm the body
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='1'
                  style={{ cursor: "pointer" }}>
                  Whrer To Use
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='1'>
                <Card.Body style={{ height: "42vh", overflowY: "auto" }}>
                  Hello! I'm another body
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='2'
                  style={{ cursor: "pointer" }}>
                  Time & Space Complexity
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='2'>
                <Card.Body style={{ height: "42vh", overflowY: "auto" }}>
                  Hello! I'm another body
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='3'
                  style={{ cursor: "pointer" }}>
                  Import code
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='3'>
                <Card.Body style={{ height: "42vh", overflowY: "auto" }}>
                  Hello! I'm another body
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      )}
    </div>
  );
}
