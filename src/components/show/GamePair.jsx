import React from "react";

const GamePair = ({ player1, player2, bye }) => (
	<div className="gamePair">
		{ !bye ?
			<p><span className="red">{ player1 }</span> PLAYS <span className="blue">{ player2 }</span></p>
			:
			<p>BYE</p>
		}
	</div>
);

export default GamePair;