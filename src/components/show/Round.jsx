import React from "react";
import Match from "./Match";


const Round = ({ round, roundNum }) => (
	<div className="round">
		<h2>Round { roundNum }</h2>
		{ round.map((match, j) => 
				<Match key={ j } bye={ match.bye } player1={ match.p1 } player2={ match.p2} />
		)}
	</div>
)

export default Round;