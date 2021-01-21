import React from "react";
import "./description.css";
import { Accordion, Card, Button } from "react-bootstrap";
import { TextareaAutosize } from "@material-ui/core";

function description() {
	return (
		<div>
			{/* <div className="decription-header">Description</div> */}
			<Accordion defaultActiveKey="0" className="decription-header">
				<Card>
					<Card.Header>
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="0"
						>
							Description
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							Hello! I'm the body of desctiption
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="1"
						>
							Input
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							<TextareaAutosize
								placeholder="Enter your input"
								style={{ height: "200px" }}
							></TextareaAutosize>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="2"
						>
							Output
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="2">
						<Card.Body>Hello! I'm the output</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}

export default description;
