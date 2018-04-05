import React from "react";

import Round from "./Round";

const Rounds = ({ rounds }) => (
	<section>
		{ rounds.map((round, i) => 
			<Round key={ i } round={ round } roundNum={ i+1 }/>
		)}
	</section>
)

export default Rounds;