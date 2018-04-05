import React, { Component } from "react";

import RouteLink from "../../containers/RouteLink";
import Rounds from "./Rounds";

class Tournament extends Component {
	rounds() {
		//-----------Work out number of rounds in tournament
		const { players } = this.props;
		let noOfPlayers = players.size;
		let noOfRounds = Math.ceil(Math.log(noOfPlayers)/Math.log(2));
		let rounds = [];
		for (let i=0; i<noOfRounds; i+=1){
			rounds.push([]);
		};
		
		//------------New array of players in randomised order
		let playersLeft = players.slice().toJS();
		let ranPlayers = [];
		for(let i=0; i<players.size; i+=1){
			let j = Math.floor(Math.random()*playersLeft.length);
			let player = playersLeft.splice( j, 1 );
			ranPlayers.push(player[0])
		}
		
		//-----------Work out number of byes in first round
		let noOfByes = 0;
		let matchesFirstRound = 0;
		let n = 0;
		while (Math.pow(2, n)<noOfPlayers){
			matchesFirstRound=(Math.pow(2, n));
			n+=1;
		}
		noOfByes = Math.pow(2, n)-noOfPlayers;

		let playedMatches = matchesFirstRound - noOfByes;
		let playersFirstRound = playedMatches * 2;


		//-----------Creates an array of objects containing pairs
		let firstPlayers = ranPlayers.splice(0, playersFirstRound)
		let secondPlayers = ranPlayers;
		firstPlayers.map((player, i)=> {
			if (i%2 === 0){
				let match = {p1: player, p2: "", bye:false};
				return rounds[0].push(match);
			}
			else {
				return rounds[0][(i-1)/2]["p2"] = player;
			}
		})

		for (let i=0; i<noOfByes; i+=1){
			rounds[0].push({p1: "?", p2: "?", bye: true})
		}

		secondPlayers.map((player, i)=> {
			if (i%2 === 0){
				let match = {p1: player, p2: "", bye:false};
				return rounds[1].push(match);
			}
			else {
				return rounds[1][(i-1)/2]["p2"] = player;
			}
		})
		
		//future matches
		let matches = matchesFirstRound;
		rounds.map((round) => {
			let currentLength = round.length;
			if (!(matches === currentLength)){
				for (let j=0; j<(matches-currentLength); j+=1){
					round.push({p1: "?", p2: "?", bye: false})
				};
			}
			return matches = matches/2;	
		})

		return rounds;
	}
	
	render() {
		return(
			<section className="tournament">
				{/* Check players in store */}
				{ this.props.players.size >=4 ?
					<Rounds rounds={ this.rounds() } />
				:
					<RouteLink>Build your tournament!</RouteLink>
				}
			</section>
		)
	}
}

export default Tournament;