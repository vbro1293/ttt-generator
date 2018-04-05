import React from "react";
import { Link } from "react-router-dom";

const GenerateLink = ({ children, noOfPlayers, needsDisabling }) => (
	<Link 
		to={ noOfPlayers>=4 ? "/generated-tournament" : "/" } 
		className={ (noOfPlayers<4 && needsDisabling!==false ) ? "button isDisabled" : "button"}
	>
		{ children }
	</Link>
)

export default GenerateLink;