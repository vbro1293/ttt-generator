//Players passed in as props to map over and show in a list

import React from "react";
import PlayerItem from "./PlayerItem";

const PlayersList = ({ players }) => (
	<ul>
		{ players.map((player, i) => 
			<PlayerItem key={ i }>{ player }</PlayerItem>
		)}
	</ul>
)

export default PlayersList;