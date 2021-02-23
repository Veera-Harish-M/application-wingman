import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { SiFacebook, SiGmail } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";

export default function Footer() {
  return (
    <div>
      <Navbar bg='dark' variant='dark' fixed='bottom'>
        <Navbar.Brand href='#home'>INVOCO@inc</Navbar.Brand>
        <Navbar.Collapse id='responsive-navbar-nav' />
        <Nav style={{ marginLeft: "10px" }}>
          <Nav>
            <Nav.Link href='#deets'>Follow us -</Nav.Link>
            <Nav.Link eventKey={0} href='#memes'>
              <span style={{ cursor: "pointer" }}>
                <AiFillInstagram size={20} />
              </span>
            </Nav.Link>
            <Nav.Link eventKey={1} href='#memes'>
              <span style={{ cursor: "pointer" }}>
                <SiGmail size={20} />
              </span>
            </Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              <span style={{ cursor: "pointer" }}>
                <VscGithub size={20} />
              </span>
            </Nav.Link>
            <Nav.Link eventKey={3} href='#memes'>
              <span style={{ cursor: "pointer" }}>
                <SiFacebook size={20} />
              </span>
            </Nav.Link>
            <Nav.Link eventKey={4} href='#memes'>
              <span style={{ cursor: "pointer" }}>
                <ImLinkedin size={20} />
              </span>
            </Nav.Link>
          </Nav>
        </Nav>
      </Navbar>
    </div>
  );
}
