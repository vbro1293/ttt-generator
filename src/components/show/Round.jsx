import React from "react";
import Match from "./Match";


const Round = ({ round, roundNum }) => (
	<div>
		<h1>Round { roundNum }</h1>
		{ round.map((match, j) => 
				<Match key={ j } bye={ match.bye } player1={ match.p1 } player2={ match.p2}/>
		)}
	</div>
)

export default Round;
// console.log(pair + " " + match)
//array of how many players per round???
//pass in players chosen for each round
//change matchpairs ???
//first round -matchsfirstround-p1, p2
//second round - remaining players  set to p1
//array of objects
//first round pairs
//second round single/pair
//firstRoundMatches = matchPairs.slice(0, )
// if pair===true pop matchpairs else 
// // 	matchPairs.filter((pair,k) => k<firstRoundMatches)
// // firstRoundMatches = 1;
// { matches[i].map((match, j) => 

// 			matchPairs.map((pair,k) => 
// 				<Match key={ j } match={ match } player1={ pair.p1 } player2={ pair.p2}/>
// 			)
// 		)}