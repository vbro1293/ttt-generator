import React, { Component } from "react";

import Button from "../Button";

class PlayerItem extends Component {
	onClickDel(){
		this.props.onClickDel(this.props.player);
	}

	render(){
		return(
			<div>
				<li className="playerListItem">
					{ this.props.player }
					<Button onClick={ this.onClickDel.bind(this) } classes="ball">
						<span role="img" aria-label="delete" className="delete">
							➖
						</span>
					</Button>
				</li>
			</div>
		)
	}
}

export default PlayerItem;