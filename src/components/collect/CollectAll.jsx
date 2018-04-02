//Collect page - where players are added. Contains imported components
import React, { Component } from "react";

//================Import components
import Input from "./Input";
import Button from "./Button";
import PlayersList from "./PlayersList";

class Collect extends Component {
	constructor(props) {
		super(props);

		//create local state to store players
		this.state = {
			players: ["player1", "player2"],
		}
		this.addPlayer = this.addPlayer.bind(this);
	}

	//Add player method called when "add player" button pressed
	addPlayer () {
		const currentPlayers = this.state.players;
		currentPlayers.push("player3");
		this.setState({
			players: currentPlayers,
		})
	}

	render(){
		return (
			<main className="main">
				<section className="add-players">
					<Input />
					<Button onClick={ this.addPlayer }>Add Player</Button>
				</section>
				<PlayersList players={ this.state.players }/>
				<Button>Generate Tournament</Button>
			</main>
		)
	}
	
}

export default Collect;