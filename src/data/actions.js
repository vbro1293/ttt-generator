//Action to add player 
export const addPlayer = (value) => {
	return {
		type: "addPlayer",
		playerName: value,
	}
}