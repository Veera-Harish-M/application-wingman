import React from "react";
import "./Navigbar.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
export default function Navigbar() {
  const lag = [
    "Python 3",
    "Python 2",
    "C",
    "C++",
    "JavaScript",
    "C#",
    "Java",
    "Perl",
    "PHP",
  ];
  return (
    <Navbar collapseOnSelect expand='lg' className='navbar-dark' variant='dark'>
      <Navbar.Brand href='#home'>INVOCO</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#features'>File</Nav.Link>
          <NavDropdown title='Edit' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Cut</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.1'>Copy</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Paste</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.3'>Find</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Find&Replace</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Undo</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>Redo</NavDropdown.Item>
          </NavDropdown>
          <select
            className='form-control'
            style={{
              background: "#343a40",
              borderRadius: "10px",
              height: "40px",
              paddingBottom: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              borderColor: "#343a40",
            }}>
            {lag.map((lag, index) => (
              <option key={index} style={{ color: "white" }}>
                {lag}
              </option>
            ))}
          </select>
        </Nav>
        <Nav>
          <Nav.Link href='#deets'>Help</Nav.Link>
          <Nav.Link eventKey={2} href='#memes'>
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav style={{ marginLeft: "10px" }}>
        <Avatar
          alt='User'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPmu9Ze9fb-wYJbfefUciUWsSxqUOKFRkHEw&usqp=CAU'
        />
      </Nav>
    </Navbar>
  );
}
