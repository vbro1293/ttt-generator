//Collect page - where players are added. Contains imported components
import React, { Component } from "react";
// import { Link } from "react-router-dom";

//================Import components
import PlayersList from "../../containers/PlayersList";
import AddPlayer from "../../containers/AddPlayer";

class Collect extends Component {
	constructor(props) {
		super(props);

		//create local state to store players
		this.state = {
			newPlayer: "",
		}

		//bind methods to this
		// this.isDisabled = this.isDisabled.bind(this);
		// this.submit = this.submit.bind(this);

	}
	// submit(e) {
	// 	e.preventDefault();
	// 	this.props.onSubmit(data);
	// }
	

	//Method called when input value is changing
	inputChange (e) {
		this.setState ({
			newPlayer: e.target.value,
		})
	}

	//Method called for input validation - no empty field and no repeated name else isDisabled is true
	// isDisabled() {
	// 	const { newPlayer, players } = this.state;
	// 	return (!newPlayer || (players.filter(player => player === newPlayer)).length!==0);
	// }

	render(){
		return (
			<main className="main">
				<AddPlayer onChange={ e => this.inputChange(e) } value={ this.state.newPlayer }/>
				<PlayersList />
				
			</main>
		)
	}
	
}

export default Collect;

{/*isDisabled= { this.isDisabled() }*/}
{/*<Link to={ (players.length>=4) ? "/generated-tournament" : "/" } className="button">
            		Generate Tournament
        		</Link>*/}