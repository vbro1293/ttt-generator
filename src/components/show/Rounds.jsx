import React, { Component } from "react";
import { Map } from "immutable";

import GamePair from "./GamePair";

class Round extends Component {
	
	gamePairs() {
		const { players } = this.props;
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
		return gamePairs;
	}

	rounds() {
		//-----------Work out number of rounds in tournament
		let noOfPlayers = this.props.players.size;
		let noOfRounds = Math.log(noOfPlayers)/Math.log(2);
		let rounds = [];
		for (let i=1; i<=noOfRounds; i+=1){
			rounds.push(i);
		}
		return rounds;
	}

	games() {
		//-----------Array of number of games containing array of players
		let noOfPlayers = this.props.players.size;
		let games = [];
		let gamesPerRound = noOfPlayers/2;
		for (let i=gamesPerRound; i>=1; i=i/2){
			let pair = [];
			for (let j=0; j<i; j+=1){
				pair.push(j);
			} 
			games.push(pair);
		}
		return games;

	}

	byes() {
		let noOfPlayers = this.props.players.size;
		//-----------Work out number of byes in first round
		let noOfByes = 0;
		if (Math.pow(noOfPlayers, 0.5)%2 !== 0) {
			let n = 0;
			while (Math.pow(2, n)<noOfPlayers){
				n+=1;
			}
			noOfByes = Math.pow(2, n)-noOfPlayers;
		}
		return noOfByes;
	}
	
	render() {
		return(
			<section className="tournament">
			{/* Map over array of pair objects, assigning players as props */}
				{ !this.noOfByes ? 
					this.rounds().map((round, i) => (
						<div key={ round }>
							<h1>Round { round }</h1>
							{/* Round 1 contains players names, other rounds have no names */}
							{ round === 1 ? 
								this.gamePairs().map((pair, i) => 
									<GamePair key={ i } player1={ pair.p1 } player2 ={ pair.p2 } />
								)
							:
								this.games()[i].map((pair, j) => 
									<GamePair key={ j } />
								)
							}
						</div>
					))
				: "BYES NEEDED" }
					
			</section>
		)
	}
}

export default Round;
