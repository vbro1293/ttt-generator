//Collect page - where players are added. Contains imported components

import React from "react";

//================Import components
import SubHeader from "../SubHeader";
import PlayersList from "../../containers/PlayersList";
import AddPlayer from "../../containers/AddPlayer";
import RouteLink from "../../containers/RouteLink";

const Collect = () => (
	<main className="main">
		<SubHeader>Please add at least 4 players to your tournament</SubHeader>
		<AddPlayer />
		<PlayersList>Players</PlayersList>
		<RouteLink>Generate Tournament</RouteLink>
	</main>
)

export default Collect;