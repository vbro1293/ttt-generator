import React from "react";

import Form from "./Form";

const AddPlayer = ({ onSubmit }) => (
	<Form onSubmit={ onSubmit } input={ "" } />
);

export default AddPlayer;