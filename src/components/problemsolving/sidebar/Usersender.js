import React from "react";
import "./chart.css";

export default function Usersender(props) {
	const { word } = props;
	return (
		<div>
			<div className="boxs sent">{word}</div>
		</div>
	);
}
