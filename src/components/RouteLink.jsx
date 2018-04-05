import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const GenerateLink = ({ children, noOfPlayers, needsDisabling }) => (
	<Link to={ noOfPlayers>=4 ? "/generated-tournament" : "/" }>
		<Button isDisabled={ noOfPlayers<4 && needsDisabling!==false }>
			{ children }
		</Button>
	</Link>
)

export default GenerateLink;