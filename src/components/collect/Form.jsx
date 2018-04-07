import React, { Component } from "react";

//================Import components
import Input from "./Input";
import Button from "../Button";

class Form extends Component {
	constructor(props){
		super(props);

		this.state = {
			input: "",
			errors: [],
		}

		/* Bind methods to this */
		this.submit = this.submit.bind(this);
	}
	submit(e){
		/* Prevent auto reload */
		e.preventDefault(); 

		/* Pass state input data into onSubmit dispatch,which was passed down as props from addplayer container */
		this.props.onSubmit(this.state.input);

		/* Reset input field */
		this.setState({input: "",})
	}

	change(e){
		let curInput = e.target.value.trim();

		//Validation - minLength, maxLength, repeated, alphanumerics
		const minLength = curInput.length < 3 ? "Please choose a name longer than 2 characters" : null;
		const maxLength = curInput.length >= 10 ? "Please choose a name shorter than 10 characters" : null;
		const repeated = (this.props.players.reduce((acc, player) =>
			(player === curInput) ? acc = true : acc, false) ? "Please choose a unique name" : null);

		//Array of errors
		const errors =  [minLength, maxLength, repeated].filter(error => error !== null);
		
		// Set local state to input value when typing, add any errors
		this.setState({
			input: curInput,
			errors: errors,
		});
	}

	render() {
		
		return(
			<form className="add-players" onSubmit={ this.submit }>
				<Input onChange={ e => this.change(e) } value={ this.state.input }/>
				{ (this.state.errors.length > 0 && this.state.input) ? 
					this.state.errors.map((error, i) => <p key={ i } className="error">{ error }</p>) 
				:
					null }
				<Button isDisabled={ this.state.errors.length || !this.state.input } classes="ball">
					<span role="img" aria-label="add" className="add">➕</span>
				</Button>
			</form>
		)
	}
};

export default Form;