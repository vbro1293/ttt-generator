import React from "react";
import Match from "./Match";


const Round = ({ round, matches, i, matchPairs }) => (
	<div>
		<h1>Round { round }</h1>
		{ matches[i].map((match, j) => 
			matchPairs.map((pair,k) => 
				<Match key={ j } match={ match } player1={ pair.p1 } player2={ pair.p2}/>
			)
		)}
	</div>
)

export default Round;
// console.log(pair + " " + match)