import React from "react";

//===================Import Components
import SubHeader from "../SubHeader";
import Rounds from "../../containers/Rounds";

const ShowAll = () => (
	<main className="main">
			<SubHeader>Your dream tournament!</SubHeader>
			<Rounds />
	</main>
)

export default ShowAll;