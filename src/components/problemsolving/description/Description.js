import React, { useState } from "react";
import {
  Alert,
  Accordion,
  Button,
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { TiArrowLeftThick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { Avatar } from "@material-ui/core";
import "./description.css";

export default function Description({ closecallback, algoData }) {
  //  to display list of content or description
  const [Choose, setChoose] = useState(1);

  const [algo, setAlgo] = useState(algoData);

  const varietyHandler = (name, id) => {
    setChoose(0);
    // setAlgoName(name);
  };
  const truncateText = (text) => {
    if (text.length > 50) {
      text = text.substr(0, 50) + "...";
    }
    return text;
  };
  return (
    <div>
      {Choose === 1 ? (
        <div>
          <Alert variant='primary' style={{ fontFamily: "Ubuntu, sans-serif" }}>
            <Alert.Heading className='mb-0'>
              Title
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
            {algo.map((item, ids) => (
              <span
                style={{ padding: "20px" }}
                key={ids}
                onClick={() => varietyHandler(item, ids)}>
                {/* onClick={() => varietyHandler(item, ids)} */}
                <Card bg={"primary"}>
                  <Container>
                    <Row>
                      <Col xs={2}>
                        <Avatar
                          style={{ cursor: "pointer", marginTop: "1rem" }}
                          alt='User'
                          src='https://pbs.twimg.com/profile_images/1114825534469337088/ltftakAN.jpg'
                        />
                      </Col>
                      <Col style={{ cursor: "pointer" }}>
                        <div style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                          {item.name}
                        </div>
                        <div style={{ fontFamily: "Work Sans,sans-serif" }}>
                          {truncateText(item.description)}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Card>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Alert
            variant={"primary"}
            style={{ fontFamily: "Ubuntu, sans-serif" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ cursor: "pointer" }} onClick={() => setChoose(1)}>
                <TiArrowLeftThick size={25} color='red' />
              </span>
              <h5 className='mb-0'>algoname</h5>
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
                  Where To Use
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
