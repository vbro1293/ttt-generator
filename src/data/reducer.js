// import { Map, List } from "immutable";

//Action called when "add player" button pressed - adds input value to state
const addPlayer = (state, { playerName }) => state.update("players", players => players.push(playerName))




const reducer = (state, action) => {
	switch (action.type) {
		case "addPlayer": return addPlayer(state, action);
		default: return state;
	}
}

export default reducer;