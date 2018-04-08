import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const GenerateLink = ({ children, noOfPlayers, needsDisabling, goHome, classes }) => (
	<Link to={ ((noOfPlayers>=4) && (goHome!==true )) ? "/generated-tournament" : "/" }>
		<Button isDisabled={ noOfPlayers<4 && needsDisabling!==false } classes={ classes }>
			{ children }
		</Button>
	</Link>
);

export default GenerateLink;