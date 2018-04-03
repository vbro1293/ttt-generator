//Collect page - where players are added. Contains imported components

import React from "react";

//================Import components
import SubHeader from "../SubHeader";
import PlayersList from "../../containers/PlayersList";
import AddPlayer from "../../containers/AddPlayer";
import GenerateLink from "../../containers/GenerateLink";

const Collect = () => (
	<main className="main">
		<SubHeader>Fill in each players name in the box below and click generate to reveal your dream tournament</SubHeader>
		<AddPlayer />
		<PlayersList />
		<GenerateLink>Generate Tournament</GenerateLink>
	</main>
)

export default Collect;