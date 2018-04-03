import React from "react";

const GamePair = ({ player1, player2 }) => (
	<div className="gamePair">
		<p><span className="red">{ player1 }</span> PLAYS <span className="blue">{ player2 }</span></p>
	</div>
);

export default GamePair;