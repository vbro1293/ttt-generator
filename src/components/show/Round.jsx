import React from "react";
import Match from "./Match";

const Round = ({ round, roundNum, onClick }) => (
	<section className="wholeRound">
		<h2>{ round.length!==1 ? "Round "+roundNum : "The Final" }</h2>
		<div className="round">
			{ round.map((match, j) => 
				<Match key={ j } bye={ match.bye } player1={ match.p1 } player2={ match.p2} roundNum={ roundNum } matchInd={ j} onClick={ onClick } />
			)}
		</div>
	</section>
);

export default Round;