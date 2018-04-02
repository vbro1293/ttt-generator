import React, { Component } from "react";
import {Map} from "immutable";

//===================Import Components
import GamePair from "./GamePair";

class ShowAll extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	players: ["p1" , "p2", "p3", "p4"],
	  	pairs: [{p1:"a", p2:"b"}, {p1:"c", p2:"d"}],
	  };
	  this.pairs = this.pairs.bind(this);
	}

	pairs() {
		const { players } = this.state;
		let playersLeft = players.slice(); //retwritten
		let ranPlayers = [];
		let length = players.length

		//Randomise array of players
		while(length>0){
			const i = Math.floor(Math.random()*playersLeft.length);
			const player = playersLeft.splice( i, 1 )[0];
			ranPlayers.push(player);
			length -= 1;
		}
	
		const gamePairs = ranPlayers.reduce((acc, val, i) => {
			if (i%2===0){
				acc.push(Map({
					p1: val,
				}));
				return acc;
			}
			else {
				return acc;
			}

			}, []
		)
		this.setState({
			pairs: gamePairs,
		})
	}

	render () {
		// this.pairs();
		return (
			<section>
				{ this.state.pairs.map((pair,i) => (
					<GamePair key={ i } player1={ pair.p1 } player2 ={ pair.p2 } />
				))
				}
			</section>
		)
	}
}

export default ShowAll;