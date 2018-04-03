import React from "react";

//===============Import components
import PlayerItem from "./PlayerItem";

//Players passed in as props to map over and show in a list
const PlayersList = ({ players }) => (
	<ul>
	{console.log({players})}
		{ players.map((player, i) => (
			<PlayerItem key={ i }>{ player }</PlayerItem>
		))}
	</ul>
)

export default PlayersList;