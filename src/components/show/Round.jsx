import React, { Component } from "react";
import {Map} from "immutable";

import GamePair from "./GamePair";

class Round extends Component {
	render() {
		const { players, round, i, games } = this.props;
		
		//------------New array of players in randomised order
		let playersLeft = players.slice().toJS(); //rewritten
		let ranPlayers = [];
		let count = players.size;

		while(count>0){
			let i = Math.floor(Math.random()*playersLeft.length);
			let player = playersLeft.splice( i, 1 );
			ranPlayers.push(player[0])
			count -= 1;
		}
		
		//-----------Creates an array of objects containing pairs
		const gamePairs = ranPlayers.reduce((acc, val, i) => {
			 if (i%2 === 0){
				acc.push(Map({ p1: "", p2: "" }));
				acc[Math.floor((i/2))]["p1"] = val;
				return acc;
			}
			else {
				acc[Math.floor(i/2)]["p2"] = val;
				return acc;
			}
		}, []);

		console.log(gamePairs)	
		return(
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
	}
}

export default Round;