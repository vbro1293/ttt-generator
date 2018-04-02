//Collect page - where players are added. Contains imported components
import React from "react";


//Import components
import Input from "./Input";
import Button from "./Button";

const Collect = () => (
	<section>
		<form className="add-players">
			<Input />
			<Button>Add Player</Button>
		</form>
		<Button>Generate Tournament</Button>
	</section>
)

export default Collect;