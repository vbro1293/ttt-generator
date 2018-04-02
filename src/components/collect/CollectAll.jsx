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
			players: [],
		}
	}

	render(){
		return (
			<section className="main">
				<form className="add-players">
					<Input />
					<Button>Add Player</Button>
				</form>
				<PlayersList />
				<Button>Generate Tournament</Button>
			</section>
		)
	}
	
}

export default Collect;