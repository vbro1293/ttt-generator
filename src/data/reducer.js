// import { Map, List } from "immutable";
import initial from "./initial";

const addPlayer = (state, { playerName }) => state.update("players", players => players.push(playerName))


const reducer = (state, action) => {
	switch (action.type) {
		//Action called when "add player" button pressed - adds input value to state
		case "addPlayer": return addPlayer(state, action);
		
		//Action called when "reset" button pressed - adds input value to state
		case "resetPlayers": return initial;
		
		default: return state;
	}
}

export default reducer;