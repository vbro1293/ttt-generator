import React from "react";
import { Link } from "react-router-dom";

const GenerateLink = ({ children, noOfPlayers }) => (
	<Link to={ noOfPlayers>=4 ? "/generated-tournament" : "/" } className="button">
		{ children }
		</Link>
)

export default GenerateLink;