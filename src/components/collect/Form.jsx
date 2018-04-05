import React, { Component } from "react";

//================Import components
import Input from "./Input";
import Button from "../Button";

class Form extends Component {
	constructor(props){
		super(props);

		this.state = {
			input: "",
		}

		/* Bind methods to this */
		this.submit = this.submit.bind(this);
	}
	submit(e) {
		/* Prevent auto reload */
		e.preventDefault(); 

		/* Pass state input data into onSubmit dispatch,which was passed down as props from addplayer container */
		this.props.onSubmit(this.state.input);

		/* Reset input field */
		this.setState({input: "",})
	}

	change(e) {
		/* Set local state to input value when typing */
		this.setState({ input: e.target.value});
	}

	render() {
		return(
			<form className="add-players" onSubmit={ this.submit }>
				<Input onChange={ e => this.change(e) } value={ this.state.input }/>
				<Button isDisabled={ this.state.input.length === 0 } classes="ball">Add</Button>
			</form>
		)
	}
};

export default Form;