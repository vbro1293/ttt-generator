import React, { Component } from "react";
import {Map} from "immutable";

//===================Import Components
import GamePair from "./GamePair";

class ShowAll extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	players: ["p1" , "p2", "p3", "p4", "p5", "p6"],
	  	pairs: [],
	  };
	}


	render () {
		// this.pairs();
		const { players } = this.state;
		let playersLeft = players.slice(); //retwritten
		let ranPlayers = [];
		let length = players.length

		//Randomise array of players
		while(length>0){
			const i = Math.floor(Math.random()*playersLeft.length);
			const player = playersLeft.splice( i, 1 )[0];
			ranPlayers.push(player);
			length = length - 1;
		}
		console.log(ranPlayers)
	
		const gamePairs = ranPlayers.reduce((acc, val, i) => {
			 if (i%2 === 0){
				acc.push(Map({
					p1: "",
					p2: "",
				}));
				acc[Math.floor((i/2))]["p1"] = val;
				return acc;
			}
			else {
				acc[Math.floor(i/2)]["p2"] = val;
				return acc;
			}

			}, []
		);
		return (
			<section>
			
				{ gamePairs.map((pair,i) => (
					<GamePair key={ i } player1={ pair.p1 } player2 ={ pair.p2 } />
				))
				}
			</section>
		)
	}
}

export default ShowAll;