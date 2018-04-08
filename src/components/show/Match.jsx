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