import React from "react";

import Player from "./Player";

const Match = ({ player1, player2, bye, roundNum }) => {
	const prevRound = roundNum - 1;
	return(
		<div className="match">
			{ !bye ?
				<div className="players">
					<Player player={ player1 } prevRound={ prevRound } classes="p1"/>
					<p className="plays"> ⚬ vs ⚬ </p>  
					<Player player={ player2 } prevRound={ prevRound } classes="p2"/>
				</div>
			:
				<p className="bye">BYE</p>
			}
		</div>
	)
};

export default Match;
// if player === ? then add hover/click with "winner from round { prevround number }
	// player1 === "?" ? (click on "?" to "winner from prevRound") : player1
	//create player component to pass in player, then do "?" validation on this page
	//repeated element
	// <p>winner from {prevRound}</p>