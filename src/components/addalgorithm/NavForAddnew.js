import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

export default function NavForAddnew() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        // expand='lg'
        fixed='top'
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
            <Avatar
              alt='User'
              src=''          />
          </Nav>
        </Nav>
      </Navbar>
    </div>
  );
}
