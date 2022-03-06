import React from "react";
import ReactDOM from "react-dom";
import App from "./comp/App";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<div className="grid justify-center content-center h-screen">
			<App/>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
