import React from "react";

const GamePair = ({ player1, player2 }) => (
	<div className="gamePair">
		<p>{ player1 }</p>
		<p> PLAYS </p>
		<p>{ player2 }</p>
	</div>
)

export default GamePair;