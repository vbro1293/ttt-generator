import React, { Component } from "react";
import { Map } from "immutable";

import Button from "../Button";
import Round from "./Round";

class Tournament extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			match: [],
		})
		this.match = this.match.bind(this)
	}

	componentDidMount(){
		//------------Set state to random pairs on component mount
		this.match();
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

	match() {
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
		const match = ranPlayers.reduce((acc, val, i) => {
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
		this.setState({ match: match })
	}

	matches() {
		//-----------Work out number of byes in first round
		let noOfPlayers = this.props.players.size;
		let noOfByes = 0;
		let matchesFirstRound = 0;
		if (Math.pow(noOfPlayers, 0.5)%2 !== 0) {
			let n = 0;
			while (Math.pow(2, n)<noOfPlayers){
				matchesFirstRound=(Math.pow(2, n));
				n+=1;
			}
			noOfByes = Math.pow(2, n)-noOfPlayers;
		}
		let byes = [];
		for (let i=noOfByes; i>0; i=i-1){
			byes.push(i);
		}
		//-----------Array of number of matches containing array of players
		let matches = [];
		for (let i=matchesFirstRound; i>=1; i=i/2){
			let match = [];
			if (i=== matchesFirstRound){
				for (let k=0; k<noOfByes; k+=1){
					match.push("bye");
				}
				for (let j=noOfByes; j<i; j+=1){
					match.push("pair");
				} 
			}
			else {
				for (let k=0; k<i; k+=1){
					match.push("pair");
				}
			}
			matches.push(match);
		}
		return matches;

	}
	
	render() {
		return(
			<section className="tournament">
			{/* Map over array of pair objects, assigning players as props */}
				
				{this.rounds().map((round, i) => (
					<Round key={ round } match={ this.state.match } matches={ this.matches() } i={i} round={ round }  />
				))}
				
				<Button onClick={ this.match }>Regenerate Tournament</Button>
			</section>
		)
	}
}

export default Tournament;