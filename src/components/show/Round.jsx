import React from "react";
import Match from "./Match";


const Round = ({ round, matches, i }) => (
	<div>	
		<h1>Round { round }</h1>
		{ matches[i].map((match, j) => 

			(match === "pair") ?
				<Match key={ j } />
			:
				<Match key={ j } bye={ true }/>
			
		)}
	</div>
)

export default Round;