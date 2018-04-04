import React from "react";

//===================Import Components
import SubHeader from "../SubHeader";
import Tournament from "../../containers/Tournament";

const ShowAll = () => (
	<main className="main">
			<SubHeader>Your dream tournament!</SubHeader>
			<Tournament />
	</main>
)

export default ShowAll;