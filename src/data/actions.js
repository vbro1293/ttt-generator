//Action to add player 
export const addPlayer = (value) => {
	return {
		type: "addPlayer",
		playerName: value,
	}
}

//Action to delete player
export const deletePlayer = (value) => {
	return {
		type: "deletePlayer",
		playerName: value,
	}
}

//Action to reset players
export const resetPlayers = () => {
	return {
		type: "resetPlayers",
	}
}