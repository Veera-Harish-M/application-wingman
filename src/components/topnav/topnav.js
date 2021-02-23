import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Topnav() {
	const history = useHistory();

	const routeChange = () => {
		let path = `Login`;
		history.push(path);
	};
	const routechanges = () => {
		let path = "Signup";
		history.push(path);
	};
	return (
		<div>
			<Navbar bg="primary" variant="dark">
				<Navbar.Brand href="#home">************</Navbar.Brand>
				<Navbar.Collapse className="justify-content-end">
					<Button
						variant="outline-light"
						style={{ marginRight: "7px" }}
						onClick={routeChange}
					>
						Login
					</Button>
					<Button variant="success" onClick={routechanges}>
						Signup
					</Button>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Topnav;
