//Players passed in as props to map over and show in a list

import React from "react";
import PlayerItem from "./PlayerItem";
import Button from "../Button";

const PlayersList = ({ children, players, onClick, onClickDel }) => (
	<section>
		{ players.size ? 
			<section>
				<h2>{ children }</h2>
				<ul>
					{ players.map((player, i) => 
						<PlayerItem key={ i } onClickDel={ onClickDel } player={ player }/>
					)}
				</ul>
				<Button onClick={ onClick } classes="ball clear">
					<span role="img" aria-label="clear">
						❌
					</span>
				</Button>
			</section>
		:
			null
		}
	</section>
)

export default PlayersList;