import React, { Component } from "react";

class ShowAll extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	players: ["p1" , "p2", "p3", "p4"]
	  };
	}


	render () {
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

		return (
			<section>
				{ ranPlayers.map( (player, i) => (
					<p key={ i }>{ player }</p>
				))}
			</section>
		)
	}
}

export default ShowAll;