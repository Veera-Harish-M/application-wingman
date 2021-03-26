import React, { useState,useEffect } from "react";
import {
  Accordion,
  Button,
  Card,
} from "react-bootstrap";
import { TiArrowLeftThick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import "./description.css";
import AlgoDisplay from './algoDisplay';

export default function Description({ closecallback, algoData ,getSelectedAlgo}) {
  //  to display list of content or description
  const [Choose, setChoose] = useState(1);

  const [algo, setAlgo] = useState([]);
  const [selectedAlgo ,setSelectedAlgo]=useState("");

  const varietyHandler = (name, id) => {
    setChoose(0);
    setSelectedAlgo(name);
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
  }, [algoData])


  const onAlgoClick=()=>{
    getSelectedAlgo(selectedAlgo);
  }


  return (
    <div className="details">
      {Choose === 1 ? (
        <div style={{cursor: "pointer"}}>
              <div className="title"><b>Title</b><span
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
                }}>
                &times;
              </span></div>
             

          <div style={{overflowY: "auto", height: "80vh" }} >
            {algo.map((item, ids) => (
              <span
                key={ids}
                onClick={() => varietyHandler(item, ids)}
                >
                <AlgoDisplay
                algoItem={item}
                title={item.name} 
                onAlgoClick={onAlgoClick} 
                description={truncateText(item.description)} 
                timecomplexity={item.timecomplexity} 
                image={"https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"}/>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div >
            <div  className='title' > 
              <span style={{ display: "flex", justifyContent: "space-between" }}> 
                <span style={{ cursor: "pointer" }} onClick={() => setChoose(1)}>
                  <TiArrowLeftThick size={18} color='red' />
                </span>
              
                <h5>{selectedAlgo.name}</h5>
                <MdCancel 
                  style={{ cursor: "pointer",marginTop: "7px" }}
                    onClick={() => {
                      closecallback(0);
                    }} size={15} color='red' 
                />
              </span> 
            </div>
          <div style={{overflowY: "auto", height: "80vh" }}>
          <Accordion
            defaultActiveKey='0'>
            <Card className="cardBody">
              <Card.Header className="cardHeader">
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
                  {selectedAlgo.description}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="cardBody">
              <Card.Header className="cardHeader">
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
                {selectedAlgo.usage}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="cardBody">
              <Card.Header className="cardHeader">
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
                Space Complexity : {selectedAlgo.spacecomplexity}
                <br/>
                Time Complexity : {selectedAlgo.timecomplexity}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="cardBody">
              <Card.Header className="cardHeader">
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
                  {selectedAlgo.code}
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
