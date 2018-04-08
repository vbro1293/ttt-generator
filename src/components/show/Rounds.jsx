import React from "react";
import Round from "./Round";

const Rounds = ({ rounds }) => {
	return (
		<section>
			{ rounds.map((round, i) => 
				<Round key={ i } round={ round } roundNum={ 1+i }/>
			)}
		</section>
	)
}

export default Rounds;