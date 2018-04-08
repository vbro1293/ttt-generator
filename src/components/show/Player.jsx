import React, { Component } from "react";

class Player extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hover: false,
		};
		this.hover = this.hover.bind(this);
		this.clicked = this.clicked.bind(this);
	}

	hover(){
		this.setState({
			hover: !this.state.hover,
		})
	}

	clicked(){
		const { player, roundNum, matchInd } = this.props;
		this.props.onClick(player, roundNum, matchInd);
	};

	render(){
		const { player, roundNum, classes } = this.props;
		const prevRound = roundNum - 1;
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
					<p onClick={ this.clicked }>{ player }</p>
				}
			</div>
		)
	}
};

export default Player;