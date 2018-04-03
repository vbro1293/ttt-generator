//Collect page - where players are added. Contains imported components

import React from "react";

//================Import components
import PlayersList from "../../containers/PlayersList";
import AddPlayer from "../../containers/AddPlayer";
import GenerateLink from "../../containers/GenerateLink";

const Collect = () => (
	<main className="main">
		<AddPlayer />
		<PlayersList />
		<GenerateLink>Generate Tournament</GenerateLink>
	</main>
)

export default Collect;