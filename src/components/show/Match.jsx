import React from "react";

import Player from "./Player";

const Match = ({ player1, player2, bye, roundNum, matchInd, onClick }) => (
	<div className="match">
		{ !bye ?
			<div className="players">
				<Player player={ player1 } roundNum={ roundNum } onClick={ onClick } classes="p1" matchInd={ matchInd }/>
				<p className="plays"> ⚬ vs ⚬ </p>  
				<Player player={ player2 } roundNum={ roundNum } onClick={ onClick } classes="p2" matchInd={ matchInd }/>
			</div>
		:
			<p className="bye">BYE</p>
		}
	</div>
)

export default Match;