import React, { useEffect, useState } from "react";
import "./Navigbar.css";
import {
  Nav,
  Navbar,
  Modal,
  Button,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function Navigbar({
  onChangeName,
  onChangeIncomingFile,
  fileId,
  onUpdate,
}) {
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

  const [profilePic, setProfilePic] = useState(
    "https://lh3.googleusercontent.com/proxy/kPU2Pmrptb1R1cMpbZRJ72jtPGv1hqLiVUcAbnQQMGGpMJeJTYb_yon81-kTGZ97MoPh1WnXkaWQkup7M2tw4Sa9j_EUWcXNtAf2t38gFA78IKun0eLqvNvR5w6f7swyFdwOI4omKPQG"
  );
  const [username, setUsername] = useState("User");

  //for upload
  const [uploadModal, setUploadModal] = React.useState(false);
  const [fileName, setFileName] = React.useState("");
  // for download
  const [openModal, setOpenModal] = React.useState(false);
  //store download data
  const [dataPrev, setDataPrev] = React.useState([]);

  useEffect(() => {
    (async () => {
      var AuthDataProfilePic = localStorage.getItem("AuthDataProfilePic");
      var AuthDataName = localStorage.getItem("AuthDataName");
      var AuthDataId = localStorage.getItem("AuthDataId");
      if (AuthDataProfilePic && AuthDataName) {
        setUsername(AuthDataName);
        setProfilePic(AuthDataProfilePic);
      }

      if (AuthDataId) {
        const url = `https://application-wingman.onrender.com/api/getFiles/?id=${AuthDataId}`;

        await fetch(url, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response.data);
            setDataPrev(response.data);
          })
          .catch((error) => {
            console.error("Error", error);

            this.setState({
              message: "Error in retrieving Algorithm",
              NegativeSnackBarOpen: true,
            });
          });
      }
    })();
  }, []);

  const handleUploadSection = () => {
    setUploadModal(false);
    //sent to home
    onChangeName(fileName);
    setFileName("");
  };
  const handleDownload = (value) => {
    // console.log("hello", value);
    onChangeIncomingFile(value);

    setOpenModal(false);
  };
  const color = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];
  return (
    <Navbar collapseOnSelect className="navbar-dark" variant="dark">
      <Navbar.Brand href="#home">INVOCO</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="#open_files"
            style={{ width: "auto" }}
            onClick={() => setOpenModal(true)}
          >
            Open Files
          </Nav.Link>

          <Modal
            show={openModal}
            onHide={() => setOpenModal(false)}
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Open a File Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {dataPrev.map((value, index) => {
                return (
                  <Alert
                    style={{ cursor: "pointer" }}
                    variant={color[index % 6]}
                    onClick={() => handleDownload(value)}
                  >
                    {value.fileName}
                  </Alert>
                );
              })}
            </Modal.Body>
          </Modal>

          {/* <NavDropdown title='Edit' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Cut</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.1'>Copy</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Paste</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.3'>Find</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Find&Replace</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Undo</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>Redo</NavDropdown.Item>
          </NavDropdown> */}
          <select
            className="form-control"
            style={{
              background: "#343a40",
              borderRadius: "10px",
              height: "40px",
              paddingBottom: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              borderColor: "#343a40",
            }}
          >
            {lag.map((lag, index) => (
              <option key={index} style={{ color: "white" }}>
                {lag}
              </option>
            ))}
          </select>
        </Nav>
        <Modal
          show={uploadModal}
          onHide={() => setUploadModal(false)}
          backdrop="static"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Save As</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="basic-url">File Name</label>
            <InputGroup className="mb-3">
              <FormControl
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="Enter your File name eg. honeybee"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setUploadModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUploadSection}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Nav className="mr-auto">
          <Nav.Link>Hello {username}!</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#uploaded">
            <AiOutlineCloudUpload
              size={20}
              color="white"
              onClick={() => {
                if (fileId === "") {
                  //send update
                  setUploadModal(true);
                } else {
                  onUpdate();
                }
              }}
            />
          </Nav.Link>
          <Nav.Link href="/help">Help</Nav.Link>
          <Nav.Link eventKey={2} href="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav style={{ marginLeft: "10px" }}>
        <Avatar alt="User" src={profilePic} />
      </Nav>
    </Navbar>
  );
}
