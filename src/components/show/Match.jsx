import React from "react";

const Match = ({ player1, player2, bye }) => (
	<div className="match">
		{ !bye ?
			<div className="players">
				<div className="player"><p>{ player1 }</p></div> 
				<p className="plays">⚬ vs ⚬ </p>  
				<div className="player"><p>{ player2 }</p></div>
			</div>
		:
			<p className="bye">BYE</p>
		}
	</div>
);

export default Match;