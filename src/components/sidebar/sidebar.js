import React from "react";
import "./sidebar.css";
//import ChatBot from "react-simple-chatbot";
//import { Alert, Container, Col, Row } from "react-bootstrap";
//import { GoSettings } from "react-icons/go";
import HeaderBot from "./HeaderBot";
import Chart from "./Chart";
function sidebar() {
	return (
		<div>
			<HeaderBot />
			<Chart />
		</div>
	);
}

export default sidebar;

{
	/* <div className="sidebar-header">
	<ChatBot
		headerTitle="invoco"
		speechSynthesis={{ enable: true, lang: "en" }}
		recognitionEnable={true}
		steps={[
			{
				id: "1",
				message: "What is your name?",

				trigger: "2",
			},
			{
				id: "2",
				user: true,
				trigger: "3",
				validator: (value) => {
					console.log(value !== "hello", value !== "hello");
					if (value !== "rowdy") {
						return "Come On Bro! ";
					}
					return true;
				},
			},
			{
				id: "3",
				message: "Hi {previousValue}, nice to meet you!",
				end: true,
			},
		]}
	/>
</div>; */
}
