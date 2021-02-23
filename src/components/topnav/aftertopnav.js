import React, { useState } from "react";
import {
	Navbar,
	Nav,
	Button,
	OverlayTrigger,
	Popover,
	Modal,
} from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { FcUnlock } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { useHistory } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
	const history = useHistory();

	const Create = () => {
		let path = `Createclass`;
		history.push(path);
	};
	const Join = () => {
		let path = `Joinclass`;
		history.push(path);
	};
	return (
		<div>
			<Modal
				{...props}
				size="sm"
				// size="lg"
				// aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body>
					<Button variant="outline-success" size="lg" onClick={Join}>
						Join Class
					</Button>{" "}
					<Button
						variant="outline-success"
						size="lg"
						onClick={Create}
					>
						Create Class
					</Button>
				</Modal.Body>
			</Modal>
		</div>
	);
}

function Aftertopnav() {
	const history = useHistory();

	const Setting = () => {
		let path = `Profile`;
		history.push(path);
	};
	const Logout = () => {
		let path = ``;
		history.push(path);
	};
	const [modalShow, setModalShow] = React.useState(false);

	const popover = (
		<Popover id="popover">
			<Popover.Title as="h3">Create or join a class</Popover.Title>
		</Popover>
	);

	const Plusbutton = () => (
		<OverlayTrigger placement="bottom" overlay={popover}>
			<Button
				variant="outline"
				style={{ borderRadius: "50%", color: "#FFFFFF" }}
				onClick={() => setModalShow(true)}
			>
				<AiOutlinePlus size={30} color="white" />
			</Button>
		</OverlayTrigger>
	);
	return (
		<div>
			<Navbar bg="primary" variant="dark">
				{/* <Nav.Link href="#home"></Nav.Link> */}
				<Navbar.Brand href="/Home">************</Navbar.Brand>
				<Navbar.Collapse className="justify-content-end">
					<Plusbutton />
					<Button onClick={Setting}>
						<FcSettings size={30} />
					</Button>
					<Button onClick={Logout}>
						<FcUnlock size={30} />
					</Button>
				</Navbar.Collapse>
			</Navbar>
			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
}

export default Aftertopnav;
