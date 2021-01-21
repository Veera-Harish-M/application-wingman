import React from "react";
import "./chart.css";

export default function Botsender(props) {
	const { word } = props;
	return (
		<div class="box received">
			<text style={{ fontSize: "13px" }}>
				<b>
					<em>Bot</em>
				</b>
			</text>
			<br />
			{word}
		</div>
	);
}

