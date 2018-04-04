import React, { Component } from "react";
import { Map } from "immutable";

import Button from "../Button";
import Round from "./Round";

class Rounds extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			gamePairs: [],
		})
		this.gamePairs = this.gamePairs.bind(this)
	}

	componentDidMount(){
		//------------Set state to random pairs on component mount
		this.gamePairs();
	}

	rounds() {
		//-----------Work out number of rounds in tournament
		let noOfPlayers = this.props.players.size;
		let noOfRounds = Math.ceil(Math.log(noOfPlayers)/Math.log(2));
		let rounds = [];
		for (let i=1; i<=noOfRounds; i+=1){
			rounds.push(i);
		}
		return rounds;
	}

	gamePairs() {
		const { players } = this.props;
		//------------New array of players in randomised order
		let playersLeft = players.slice().toJS();
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
		this.setState({ gamePairs: gamePairs })
	}

	games() {
		//-----------Work out number of byes in first round
		let noOfPlayers = this.props.players.size;
		let noOfByes = 0;
		let gamesFirstRound = 0;
		if (Math.pow(noOfPlayers, 0.5)%2 !== 0) {
			let n = 0;
			while (Math.pow(2, n)<noOfPlayers){
				gamesFirstRound=(Math.pow(2, n));
				n+=1;
			}
			noOfByes = Math.pow(2, n)-noOfPlayers;
		}
		let byes = [];
		for (let i=noOfByes; i>0; i=i-1){
			byes.push(i);
		}
		//-----------Array of number of games containing array of players
		let games = [];
		for (let i=gamesFirstRound; i>=1; i=i/2){
			let game = [];
			if (i=== gamesFirstRound){
				for (let k=0; k<noOfByes; k+=1){
					game.push("bye");
				}
				for (let j=noOfByes; j<i; j+=1){
					game.push("pair");
				} 
			}
			else {
				for (let k=0; k<i; k+=1){
					game.push("pair");
				}
			}
			games.push(game);
		}
		return games;

	}
	
	render() {
		return(
			<section className="tournament">
			{/* Map over array of pair objects, assigning players as props */}
				
				{this.rounds().map((round, i) => (
					<Round key={ round } gamePairs={ this.state.gamePairs } games={ this.games() } i={i} round={ round }  />
				))}
				
				<Button onClick={ this.gamePairs }>Regenerate Tournament</Button>
			</section>
		)
	}
}

export default Rounds;