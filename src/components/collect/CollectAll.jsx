//Collect page - where players are added. Contains imported components
import React from "react";

//================Import components
import Input from "./Input";
import Button from "./Button";
import PlayersList from "./PlayersList";

const Collect = () => (
	<section className="main">
		<form className="add-players">
			<Input />
			<Button>Add Player</Button>
		</form>
		<PlayersList />
		<Button>Generate Tournament</Button>
	</section>
)

export default Collect;