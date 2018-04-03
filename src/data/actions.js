//Action to add player 
export const addPlayer = (value) => {
	return {
		type: "addPlayer",
		playerName: value,
	}
}

export const resetPlayers = () => {
	return {
		type: "resetPlayers",
	}
}