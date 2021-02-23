import React from "react";
import NavForAddnew from "./NavForAddnew";
import {
  Row,
  Col,
  Alert,
  Button,
  Badge,
  Card,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import { FaSmile } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";

export default function Addalgorithm() {
  return (
    <div>
      <NavForAddnew />
      <div style={{ marginTop: "5%" }}>
        <div
          style={{
            margin: "auto",
            width: "60%",
            padding: "10px",
          }}>
          <Alert variant={"warning"}>
            To Give a alert message before to post algorithm.
          </Alert>
          <Card className='mb-2'>
            <Card.Body>
              <Card.Title>
                Name of Alogrithm<span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant='light' className='mb-2 text-muted'>
                Name must be unique
              </Badge>

              <InputGroup className='mb-3'>
                <FormControl
                  placeholder='Enter Name of Algorithm'
                  aria-label='algname'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
            </Card.Body>
          </Card>
          <Card className='mb-2'>
            <Card.Body>
              <Card.Title>
                Category<span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant='light' className='mb-2 text-muted'>
                Eg. sort, searching or Path-Finding
              </Badge>

              <input
                className='form-control'
                list='alglist'
                name='material'
                style={{ width: "450px" }}
                placeholder='Enter Name of Algorithm '
              />
              <datalist id='alglist'>
                <option value='Sort' />
                <option value='Finding-Prime' />
              </datalist>
            </Card.Body>
          </Card>
          <Card className='mb-2'>
            <Card.Body>
              <Card.Title>
                Description<span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant='light' className='mb-2 text-muted'>
                A small Explanation About the Algorithm
              </Badge>

              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Control
                  placeholder='Write Something . . .'
                  as='textarea'
                  rows={7}
                />
              </Form.Group>
            </Card.Body>
          </Card>
          <Card className='mb-2'>
            <Card.Body>
              <Card.Title>
                When To Use<span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant='light' className='mb-2 text-muted'>
                Why Should You Use an Algorithm ?
              </Badge>

              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Control
                  placeholder='Write Something . . .'
                  as='textarea'
                  rows={7}
                />
              </Form.Group>
            </Card.Body>
          </Card>
          <Card className='mb-2'>
            <Card.Body>
              <Card.Title>
                Complexity<span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant='light' className='mb-2 text-muted'>
                Amount of Resources required to run
              </Badge>

              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId='formBasicTime'>
                      <Form.Label>Time Complexity</Form.Label>
                      <Form.Control type='text' placeholder='Eg. O(N)' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId='formBasicSpace'>
                      <Form.Label>Space Complexity</Form.Label>
                      <Form.Control type='text' placeholder='Eg. O(N)' />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card className='mb-2'>
            <Card.Body>
              <Card.Title>
                Source Code<span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant='light' className='mb-2 text-muted'>
                Click Here! To Share Your code <FaSmile size={25} />
              </Badge>
              <Button
                variant='light'
                style={{ color: "blue" }}
                href='http://localhost:3000/codeblock'
                target='_blank'>
                {/* backgroundColor: "#b2beb5", */}
                <h5>
                  ide <ImNewTab />
                </h5>
              </Button>
            </Card.Body>
          </Card>
          <Button className='mb-2' style={{ float: "right" }} variant='success'>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
