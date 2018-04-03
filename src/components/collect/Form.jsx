import React, {Component} from "react";

//================Import components
import Input from "./Input";
import Button from "./Button";

class Form extends Component {
	constructor(props){
		super(props);

		this.state = {
			input: props.input.slice(),
		}
		this.submit = this.submit.bind(this);
	}

	submit(e) {
		e.preventDefault(); 
		let data = this.state.input;
		this.props.onSubmit(data);
	}

	change(e) {
		this.setState({ input: e.target.value});
	}

	render() {
		return(
			<form className="add-players" onSubmit={ this.submit }>
				<Input onChange={ e => this.change(e) } value={ this.state.value }/>
				<Button className="button">Add Player</Button>
			</form>
		)
	}
};

export default Form;

 // isDisabled= { isDisabled }