import React from "react";
import GamePair from "./GamePair";


const Round = ({ round, games, gamePairs, i, byes }) => (
	<div>
		<h1>Round { round }</h1>
		{console.log(byes)}
			{/* Round 1 contains players names, other rounds have no names  */}
			
			{
				byes.map((pair, j) => 
			 		<GamePair key={ j } player1={"BYE"} player2={"BYE"}/>
			 	)
			}
			{
				gamePairs.map((pair, i) => 
					<GamePair key={ i } player1={ pair.p1 } player2 ={ pair.p2 } />
				)
				
			}
			{
				games[i].map((pair, j) => 
				 		<GamePair key={ j } />
			 	)
				
			}
			
			
			
	</div>
)

export default Round;
// { round===1 ? 
	// : 
	// 		 	games[i].map((pair, j) => 
	// 		 		<GamePair key={ j } />
	// 		 	)
	// 		}