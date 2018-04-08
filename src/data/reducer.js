// import { Map, List } from "immutable";
import initial from "./initial";

const addPlayer = (state, { playerName }) => state.update("players", players => players.push(playerName));

const deletePlayer = (state, { playerName }) => state.update("players", players => players.filter(player => player !== playerName));

const reducer = (state, action) => {
	switch (action.type) {
		//"+" button pressed - adds input value to state
		case "addPlayer": return addPlayer(state, action);

		//"-" button pressed - deletes player from state
		case "deletePlayer": return deletePlayer(state, action);
		
		//"reset" button pressed - adds input value to state
		case "resetPlayers": return initial;
		
		default: return state;
	}
}

export default reducer;