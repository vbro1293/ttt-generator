import React from "react";

const GamePair = ({ player1, player2 }) => (
	<div className="gamePair">
		<p><span>{ player1 }</span> PLAYS <span>{ player2 }</span></p>
	</div>
)

export default GamePair;