//Players passed in as props to map over and show in a list

import React from "react";
import PlayerItem from "./PlayerItem";
import Button from "./Button";

const PlayersList = ({ players }) => (
	<section>
		<ul>
			{ players.map((player, i) => 
				<PlayerItem key={ i }>{ player }</PlayerItem>
			)}
		</ul>
		{ players.size ? 
			<Button>Reset</Button>
		:
			null
		}
	</section>
)

export default PlayersList;