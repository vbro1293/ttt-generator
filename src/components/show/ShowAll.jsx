import React, { Component } from "react";
import {Map} from "immutable";

//===================Import Components
import GamePair from "./GamePair";
import NextRound from "./NextRound";

class ShowAll extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	players: ["pa" , "pb", "pc", "pd"],
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
		console.log("gamePairs " + gamePairs)
		
		
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
		let noOfRounds = Math.log(noOfPlayers)/Math.log(2);

		let rounds = [];
		for (let i=1; i<=noOfRounds; i+=1){
			rounds.push(i);
		}
		
		let games = [];
		let gamesPerRound = noOfPlayers/2;
		
		for (let i=gamesPerRound; i>=1; i=i/2){
			let pair = [];
			for (let j=0; j<i; j+=1){
				pair.push(j);
			} 
			games.push(pair);
		}
		console.log("rounds "+rounds)
		console.log("games " + games)
		
		return (
			<section>
				
				{/* Map over array of pair objects, assigning players as props */}

				{ !noOfByes ? rounds.map((round, i) => {
					return (
						<div key={ i } className="round">
							<h1 >Round { round }</h1>
							
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
				})
				: null
			}
			</section>
		)
	}
}

export default ShowAll;