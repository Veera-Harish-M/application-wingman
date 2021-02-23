import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navj() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        // expand='lg'
        fixed='top'
        //sticky="top"
        className='navbar-dark '
        variant='dark'>
        <Navbar.Brand href='#home'>INVOCO</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' />
        <Nav style={{ marginLeft: "10px" }}>
          <Nav>
            <Nav.Link href='#deets'>Help</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              About
            </Nav.Link>
          </Nav>
        </Nav>
      </Navbar>
    </div>
  );
}
