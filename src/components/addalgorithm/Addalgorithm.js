import React, { useState } from "react";
import NavForAddnew from "./NavForAddnew";
import {
  Row,
  Col,
  Button,
  Badge,
  Card,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import { FaSmile } from "react-icons/fa";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function Addalgorithm() {
  const [data, setData] = useState({
    Algorithm: "",
    Category: "",
    Description: "",
    Use: "",
    Timecomplexity: "",
    Spacecomplexity: "",
    code: "",
  });

  const [PositiveSnackBarOpen, setPositiveSnackBarOpen] = useState(false);
  const [NegativeSnackBarOpen, setNegativeSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleNegativeSnackbarClose = () => {
    setNegativeSnackBarOpen(false);
    setMessage("");
  };

  const handlePositiveSnackbarClose = () => {
    setPositiveSnackBarOpen(false);
    setMessage("");
  };

  const formatCode = (code) => {
    var temp = code.split("\n");
    console.log(temp);
    var res = "";
    temp.forEach((element) => {
      res += element.replace("    ", "\\t") + "\\n";
    });
    console.log(res);
    console.log(res);
    return res;
  };

  const handleSubmit = (event) => {
    var resultCode = formatCode(data.code);

    event.preventDefault();

    setMessage("");

    if (
      data.Algorithm.length !== 0 &&
      data.Category.length !== 0 &&
      data.Description.length !== 0 &&
      data.Spacecomplexity.length !== 0 &&
      data.Timecomplexity.length !== 0 &&
      data.Use.length !== 0 &&
      data.code.length !== 0
    ) {
      //send received data from user to our server
      // const url = "https://application-wingman.herokuapp.com/api/addAlgo";
      const url = "https://application-wingman.herokuapp.com/api/addAlgo";
      console.log("hai", resultCode, typeof resultCode);
      //body of api
      var dataSend = {
        name: data.Algorithm,
        description: data.Description,
        code: data.code,
        timecomplexity: data.Timecomplexity,
        spacecomplexity: data.Spacecomplexity,
        usage: data.Use,
        category: data.Category,
      };
      console.log(dataSend);

      //post request with json body details
      fetch(url, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: { "Content-Type": "application/json" },
      })
        //receive response as json
        .then((res) => res.json())

        //catch fetch errors => could'nt reach api
        .catch((error) => {
          //set error message to state error
          setMessage("Something Went Wrong!");
          setNegativeSnackBarOpen(true);

          console.error("Error", error);
        })

        //accessing received response
        .then((response) => {
          if (response) {
            if (response.status === "Error") {
              //set error message to state error
              setMessage(response.message);
              setNegativeSnackBarOpen(true);
            } else {
              //sending response to function =>authentication() in Navbar.js
              console.log("Success:", response);
              setMessage(response.message);
              setPositiveSnackBarOpen(true);
            }
          }
        });
    } else {
      setMessage("fill out all fields");
      setNegativeSnackBarOpen(true);
    }
  };
  return (
    <div>
      <NavForAddnew />
      <div style={{ marginTop: "5%" }}>
        <div
          style={{
            margin: "auto",
            width: "60%",
            padding: "10px",
          }}
        >
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>
                Name of Alogrithm
                <span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant="light" className="mb-2 text-muted">
                Name must be unique
              </Badge>

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter Name of Algorithm"
                  aria-label="algname"
                  value={data.Algorithm}
                  required
                  onChange={(e) =>
                    setData({
                      ...data,
                      Algorithm: e.target.value,
                    })
                  }
                />
              </InputGroup>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>
                Category<span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant="light" className="mb-2 text-muted">
                Eg. sort, searching or Path-Finding
              </Badge>

              <input
                className="form-control"
                list="alglist"
                name="material"
                style={{ width: "450px" }}
                placeholder="Enter Name of Algorithm "
                value={data.Category}
                required
                onChange={(e) =>
                  setData({
                    ...data,
                    Category: e.target.value,
                  })
                }
              />
              <datalist id="alglist">
                <option value="Sort" />
                <option value="Finding-Prime" />
              </datalist>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>
                Description
                <span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant="light" className="mb-2 text-muted">
                A small Explanation About the Algorithm
              </Badge>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  placeholder="Write Something . . ."
                  as="textarea"
                  rows={7}
                  required
                  value={data.Description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      Description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>
                When To Use
                <span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant="light" className="mb-2 text-muted">
                Where will You Use this Algorithm ?
              </Badge>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  placeholder="Write Something . . ."
                  as="textarea"
                  rows={7}
                  required
                  value={data.Use}
                  onChange={(e) =>
                    setData({
                      ...data,
                      Use: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>
                Complexity
                <span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant="light" className="mb-2 text-muted">
                Amount of Resources required to run
              </Badge>

              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicTime">
                      <Form.Label>Time Complexity</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={data.Timecomplexity}
                        onChange={(e) =>
                          setData({
                            ...data,
                            Timecomplexity: e.target.value,
                          })
                        }
                        placeholder="Eg. O(N)"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicSpace">
                      <Form.Label>Space Complexity</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={data.Spacecomplexity}
                        onChange={(e) =>
                          setData({
                            ...data,
                            Spacecomplexity: e.target.value,
                          })
                        }
                        placeholder="Eg. O(N)"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>
                Share Your code <FaSmile size={25} />
                <span style={{ color: "red" }}>*</span>
              </Card.Title>
              <Badge variant="light" className="mb-2 text-muted">
                Paste your Code
              </Badge>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  placeholder="Write Something . . ."
                  as="textarea"
                  rows={7}
                  required
                  value={data.code}
                  onChange={(e) =>
                    setData({
                      ...data,
                      code: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Card.Body>
          </Card>
          <Button
            className="mb-2"
            style={{ float: "right" }}
            variant="success"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </div>
      </div>
      <Snackbar
        open={NegativeSnackBarOpen}
        autoHideDuration={6000}
        onClose={handleNegativeSnackbarClose}
      >
        <Alert severity="error">{message}</Alert>
      </Snackbar>

      <Snackbar
        open={PositiveSnackBarOpen}
        autoHideDuration={6000}
        onClose={handlePositiveSnackbarClose}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </div>
  );
}
