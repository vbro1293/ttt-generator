//Collect page - where players are added. Contains imported components
import React, { Component } from "react";
import { Link } from "react-router-dom";

//================Import components
import Input from "./Input";
import Button from "./Button";
import PlayersList from "./PlayersList";

class Collect extends Component {
	constructor(props) {
		super(props);

		//create local state to store players
		this.state = {
			newPlayer: "",
			players: ["player1", "player2"],
		}

		//bind methods to this
		this.addPlayer = this.addPlayer.bind(this);
	}

	//Method called when "add player" button pressed - adds input value to players list
	addPlayer () {
		const currentPlayers = this.state.players;
		const newPlayer = this.state.newPlayer;
		currentPlayers.push(newPlayer);
		this.setState({
			players: currentPlayers,
		})
	}

	//Method called when input value is changing
	inputChange (e) {
		this.setState ({
			newPlayer: e.target.value,
		})
	}

	render(){
		const { newPlayer, players } = this.state;
		return (
			<main className="main">
				<section className="add-players">
					<Input onChange={ e => this.inputChange(e) } value={ newPlayer }/>
					<Button onClick={ this.addPlayer } className="button">Add Player</Button>
				</section>
				<PlayersList players={ players }/>
				<Link to={ "/generated-tournament" } className="button">
            		Generate Tournament
        		</Link>
			</main>
		)
	}
	
}

export default Collect;