import React from "react";

const Match = ({ player1, player2, match }) => (
	<div className="match">
		{ match ?
			<p><span className="red">{ player1 }</span> PLAYS <span className="blue">{ player2 }</span></p>
			:
			<p>BYE</p>
		}
	</div>
);

export default Match;