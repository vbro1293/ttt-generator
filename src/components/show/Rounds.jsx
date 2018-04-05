import React from "react";

import Round from "./Round";
import Button from "../Button";

const Rounds = ({ rounds }) => (
	<section className="rounds">
		{rounds.map((round, i) => 
			<Round key={ i } round={ round } roundNum={ i+1 }/>
		)}
		<Button onClick={ this.rounds }>Regenerate Tournament</Button>
	</section>
)

export default Rounds;