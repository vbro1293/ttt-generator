import React from "react";
import GamePair from "./GamePair";


const Round = ({ round, games, gamePairs, i }) => (
	<div>	
		<h1>Round { round }</h1>
		{ games[i].map((game, j) => 

			(game==="pair") ?
				<GamePair key={ j } />
			:
				<GamePair key={ j } bye={ true }/>
			
		)}
	</div>
)

export default Round;
// 
	// : 
	// 		 	games[i].map((pair, j) => 
	// 		 		<GamePair key={ j } />
	// 		 	)
	// 		}