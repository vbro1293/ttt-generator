import React, { Component } from "react";

class Player extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
		};
		this.clicked = this.clicked.bind(this);
	}

	clicked(){
		
		this.setState({
			clicked: !this.state.clicked,
		})
	}

	render(){
		const { player, prevRound } = this.props;
		return(
			<div className="player">
				{ player==="?" ? 
					<div className="questionMark">
						<p onMouseOver={ this.clicked }>{ player }</p>
						{ this.state.clicked ? 
							<p className="nextPlayer">{ "Round "+ prevRound + " winner"}</p>
						: 
							null 
						}
					</div>
				:
					<p>{ player }</p>
				}
			</div>
		)
	}
};

export default Player;