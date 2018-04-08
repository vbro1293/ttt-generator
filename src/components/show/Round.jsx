import React from "react";
import Match from "./Match";

const Round = ({ round, roundNum, onClick }) => (
	<div className="round">
		<h2>{ round.length!==1 ? "Round "+roundNum : "The Final" }</h2>
		{ round.map((match, j) => 
				<Match key={ j } bye={ match.bye } player1={ match.p1 } player2={ match.p2} roundNum={ roundNum } matchInd={ j} onClick={ onClick } />
		)}
	</div>
)

export default Round;