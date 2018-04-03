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
			players: [],
		}

		//bind methods to this
		this.addPlayer = this.addPlayer.bind(this);
		this.isDisabled = this.isDisabled.bind(this);

	}

	//Method called when "add player" button pressed - adds input value to players list
	addPlayer () {
		const currentPlayers = this.state.players;
		const newPlayer = this.state.newPlayer;
		currentPlayers.push(newPlayer);
		this.setState({
			newPlayer: "",
			players: currentPlayers,
		})
	}

	//Method called when input value is changing
	inputChange (e) {
		this.setState ({
			newPlayer: e.target.value,
		})
	}

	//Method called for input validation - no empty field and no repeated name else isDisabled is true
	isDisabled() {
		const { newPlayer, players } = this.state;
		return (!newPlayer || (players.filter(player => player === newPlayer)).length!==0);
	}

	render(){
		const { newPlayer, players } = this.state;
		return (
			<main className="main">
				<section className="add-players">
					<Input onChange={ e => this.inputChange(e) } value={ newPlayer }/>
					<Button onClick={ this.addPlayer } isDisabled= { this.isDisabled() } className="button">Add Player</Button>
				</section>
				<PlayersList players={ players }/>
				<Link to={ (players.length>=4) ? "/generated-tournament" : "/" } className="button">
            		Generate Tournament
        		</Link>
			</main>
		)
	}
	
}

export default Collect;