import React from "react";
import GamePair from "./GamePair";


const Round = ({ round, games, gamePairs, i, byes }) => (
	<div>
		<h1>Round { round }</h1>
{		console.log(games)}
		
			
	</div>
)

export default Round;
// 
	// : 
	// 		 	games[i].map((pair, j) => 
	// 		 		<GamePair key={ j } />
	// 		 	)
	// 		}