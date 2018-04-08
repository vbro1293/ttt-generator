import React, { Component } from "react";

import Button from "../Button";

class PlayerItem extends Component {
	onClickDel(){
		this.props.onClickDel(this.props.player);
	}

	render(){
		return(
			<li className="playerListItem">
				<p className="playerItem">{ this.props.player }</p>
				<Button onClick={ this.onClickDel.bind(this) } classes="ball delete">
					<span role="img" aria-label="delete">
						➖
					</span>
				</Button>
			</li>
		)
	}
}

export default PlayerItem;