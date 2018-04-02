import React, { Component } from "react";
import {Map} from "immutable";

//===================Import Components
import GamePair from "./GamePair";
import NextRound from "./NextRound";

class ShowAll extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	players: ["p1" , "p2", "p3", "p4"],
	  };
	}


	render () {
		const { players } = this.state;
		let playersLeft = players.slice(); //retwritten
		let ranPlayers = [];
		let count = players.length;

		//New array of players in randomised order
		while(count>0){
			const i = Math.floor(Math.random()*playersLeft.length);
			const player = playersLeft.splice( i, 1 )[0];
			ranPlayers.push(player);
			count -= 1;
		}
		
		//Creates an array of objects containing pairs
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
		
		
		//Work out number of byes in first round
		let noOfPlayers = players.length;
		let noOfByes = 0;
		if (Math.pow(noOfPlayers, 0.5)%2 !== 0) {
			let n = 0;
			while (Math.pow(2, n)<noOfPlayers){
				n+=1;
			}
			noOfByes = Math.pow(2, n)-noOfPlayers;
		}
		let noOfRounds = Math.pow(noOfPlayers, 0.5);

		let rounds = [];
		for (let i=2; i<=noOfRounds; i++){
			rounds.push(i);
		}

		return (
			<section>
				
				{/* Map over array of pair objects, assigning players as props */}
				<h1>Round 1</h1>
					{ !noOfByes ? gamePairs.map((pair,i) => (
						<GamePair key={ i } player1={ pair.p1 } player2 ={ pair.p2 } />
					)) : null }{/* BYES RENDERING NEEDED HERE /*}
				
			{/* Next rounds - basic for power 2 */}
				{ rounds.map((round, i) => (
					<NextRound key={ i } />
					))}
			</section>
		)
	}
}

export default ShowAll;