import React from "react";
import Round from "./Round";

const Rounds = ({ rounds, onClick }) => {
	return (
		<section>
			{ rounds.map((round, i) => 
				<Round key={ i } round={ round } roundNum={ 1+i } onClick={ onClick }/>
			)}
		</section>
	)
}

export default Rounds;