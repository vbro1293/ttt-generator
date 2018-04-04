import React from "react";
import GamePair from "./GamePair";

const Round = ({ round, i, gamePairs, games }) => (
	<div key={ i } className="round">
		<h1>Round { round }</h1>
		{/* Round 1 contains players names, other rounds have no names */}
		
		{ round === 1 ? 
			gamePairs.map((pair,i) => 
				<GamePair key={ i } player1={ pair.p1 } player2 ={ pair.p2 } />
			)
		:
			games[i].map((pair, j) => 
				<GamePair key={ j } />
			)
		}
		
	</div>
)

export default Round;