import React from "react";
import ReactDOM from "react-dom";
import DiscordInvite from "./comp/DiscordInvite";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<div className="grid justify-center content-center h-screen">
			<DiscordInvite guild="862300942690287646"/>
			<DiscordInvite guild="635938104775278602"/>
			<DiscordInvite guild="811066495588761600"/>
			<DiscordInvite guild="804546381116342282"/>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
