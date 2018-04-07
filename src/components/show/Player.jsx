import React, { Component } from "react";

class Player extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hover: false,
		};
		this.hover = this.hover.bind(this);
	}

	hover(){
		
		this.setState({
			hover: !this.state.hover,
		})
	}

	render(){
		const { player, prevRound, classes } = this.props;
		return(
			<div className="player">
				{ player==="?" ? 
					<div className="questionMark">
						<p className={ classes } onMouseEnter={ this.hover } onMouseLeave={ this.hover }>{ player }</p>
						{ this.state.hover ? 
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