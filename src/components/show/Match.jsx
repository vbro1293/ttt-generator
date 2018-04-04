import React from "react";

const Match = ({ player1, player2, bye }) => (
	<div className="match">
		{ !bye ?
			<p><span className="red">{ player1 }</span> PLAYS <span className="blue">{ player2 }</span></p>
			:
			<p>BYE</p>
		}
	</div>
);

export default Match;