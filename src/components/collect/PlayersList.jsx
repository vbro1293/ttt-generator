//Players passed in as props to map over and show in a list

import React from "react";
import PlayerItem from "./PlayerItem";
import Button from "../Button";

const PlayersList = ({ children, players, onClick }) => (
	<section>
		{ players.size ? 
			<section>
				<h2>{ children }</h2>
				<ul>
					{ players.map((player, i) => 
						<PlayerItem key={ i }>{ player }</PlayerItem>
					)}
				</ul>
				<Button onClick={ onClick }>Reset</Button>
			</section>
		:
			<h4>Type a players name into the input box, to add them to the tournament</h4>
		}
	</section>
)

export default PlayersList;