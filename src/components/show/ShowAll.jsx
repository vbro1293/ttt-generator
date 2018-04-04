import React, { Component } from "react";

//===================Import Components
import SubHeader from "../SubHeader";

import Round from "../../containers/Round";

class ShowAll extends Component {
	constructor(props) {
		super(props);

		this.state = {
			players: ["pa" , "pb", "pc", "pd"],
		};
	}


	render () {
		const { players } = this.state;

			
		
		//-----------Work out number of byes in first round
		let noOfPlayers = players.length;
		let noOfByes = 0;
		if (Math.pow(noOfPlayers, 0.5)%2 !== 0) {
			let n = 0;
			while (Math.pow(2, n)<noOfPlayers){
				n+=1;
			}
			noOfByes = Math.pow(2, n)-noOfPlayers;
		}

		//-----------Work out number of rounds in tournament
		let noOfRounds = Math.log(noOfPlayers)/Math.log(2);
		let rounds = [];
		for (let i=1; i<=noOfRounds; i+=1){
			rounds.push(i);
		}
		
		//-----------Array of number of games containing array of players
		let games = [];
		let gamesPerRound = noOfPlayers/2;
		for (let i=gamesPerRound; i>=1; i=i/2){
			let pair = [];
			for (let j=0; j<i; j+=1){
				pair.push(j);
			} 
			games.push(pair);
		}

		return (
			<section>
					<SubHeader>Your dream tournament!</SubHeader>

				{/* Map over array of pair objects, assigning players as props */}
				{ !noOfByes ? rounds.map((round, i) => <Round key={ i } round={ round } i={ i } games={games}/>)
				: "BYES NEEDED" }
			</section>
		)
	}
}

export default ShowAll;