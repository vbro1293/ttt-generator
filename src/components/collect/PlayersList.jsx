//Players passed in as props to map over and show in a list

import React from "react";
import PlayerItem from "./PlayerItem";
import Button from "../Button";

const PlayersList = ({ children, players, onClick }) => (
	<section>
		<h2>{ children }</h2>
		<ul>
			{ players.map((player, i) => 
				<PlayerItem key={ i }>{ player }</PlayerItem>
			)}
		</ul>
		{ players.size ? 
			<Button onClick={ onClick }>Reset</Button>
		:
			null
		}
	</section>
)

export default PlayersList;