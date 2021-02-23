import React, { useState } from "react";
import Navj from "./Navj";
import Footer from "./Footer";
import { Card, Form, Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";

export default function Newreg() {
  //email
  const [email, setemail] = useState("");
  //pass
  const [pass, setpass] = useState("");
  //re-pass
  const [repass, setrepass] = useState("");
  //for only check
  const [checkpass, setcheckpass] = useState(0);
  //after process
  const completereg = () => {
    if (pass === repass) {
    } else {
      setcheckpass(1);
    }
  };
  return (
    <div>
      <Navj />
      <div style={{ marginTop: "3%" }}>
        <div
          style={{
            margin: "auto",
            width: "30%",
            padding: "10px",
          }}>
          <Card style={{ marginTop: "10%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Registation
              </Card.Title>
              <Form>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    placeholder='Enter email-id'
                  />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    value={pass}
                    onChange={(e) => {
                      setpass(e.target.value);
                    }}
                    placeholder='Enter Password'
                  />
                </Form.Group>
                <Form.Group controlId='formBasicRePassword'>
                  <Form.Label>Re-Password</Form.Label>
                  <Form.Control
                    type='password'
                    value={repass}
                    onChange={(e) => {
                      setrepass(e.target.value);
                    }}
                    placeholder='Re-Enter Password'
                  />
                  {checkpass === 1 ? (
                    <Form.Text style={{ color: "red" }}>Mismatch</Form.Text>
                  ) : (
                    <Form.Text style={{ color: "red" }}></Form.Text>
                  )}
                </Form.Group>
                <Button
                  className='mb-2'
                  style={{ float: "right" }}
                  onClick={completereg}
                  variant='success'>
                  Join us
                </Button>
              </Form>

              <br />
              <br />
              <Card.Text style={{ textAlign: "center" }}>
                or Connect us with Social Account
              </Card.Text>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <span style={{ cursor: "pointer" }}>
                  <FcGoogle size={25} />
                </span>
                <span style={{ cursor: "pointer" }}>
                  <SiFacebook size={25} color={"#3b5998 "} />
                </span>
                <span style={{ cursor: "pointer" }}>
                  <VscGithub size={25} color={"black"} />
                </span>
                <span style={{ cursor: "pointer" }}>
                  <ImLinkedin size={25} color={"#0e76a8"} />
                </span>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
